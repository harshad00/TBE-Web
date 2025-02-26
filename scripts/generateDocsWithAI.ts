import fs from 'fs';
import path from 'path';
import { OpenAI, RateLimitError } from 'openai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const API_FOLDER_PATH = 'src/pages/api/v1';
const BASE_PATH = './docs';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const generateDocumentation = async (
  filePath: string,
  retries = 3
): Promise<any> => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const prompt = `Analyze the following Next.js API route and generate OpenAPI documentation in JSON format. 
  \n\n${fileContent}\n\n
  Provide only the JSON output. Do not include any explanations or additional text. 
  If the API does not have valid parameters, return an empty object { "paths": {} }.
  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1500,
    });

    let rawResponse = response.choices[0]?.message?.content?.trim() || '';

    // 🔥 Auto-remove potential non-JSON text before parsing
    rawResponse = rawResponse
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    const parsedDoc = JSON.parse(rawResponse);

    if (!parsedDoc.paths) {
      return { paths: {} };
    }

    return parsedDoc;
  } catch (error) {
    if (error instanceof RateLimitError && retries > 0) {
      console.warn(
        `Rate limit hit. Retrying after 20 seconds... Remaining retries: ${retries}`
      );
      await delay(20000); // Wait 20 seconds
      return generateDocumentation(filePath, retries - 1); // Retry
    }

    console.error(`Error generating documentation for ${filePath}:`, error);
    return { paths: {} }; // Return empty structure on failure
  }
};

// 🔥 Recursive function to get all `.ts` files inside nested directories
const getAllFiles = (dirPath: string): string[] => {
  let files: string[] = [];
  fs.readdirSync(dirPath).forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const whitelistedFolders = ['unskilled'];
    if (
      fs.statSync(fullPath).isDirectory() &&
      whitelistedFolders.includes(file)
    ) {
      files = [...files, ...getAllFiles(fullPath)];
    } else if (file.endsWith('.ts')) {
      files.push(fullPath);
    }
  });
  return files;
};

const processAllAPIFiles = async () => {
  const apiFiles = getAllFiles(API_FOLDER_PATH);

  const swaggerSpec = {
    openapi: '3.0.0',
    info: { title: 'The Boring Education API', version: '1.0.0' },
    paths: {},
  };

  for (let index = 0; index < apiFiles.length; index++) {
    const file = apiFiles[index];
    console.log(
      `${index + 1}/${
        apiFiles.length
      } A. Generating documentation for ${file}...`
    );
    const filePath = path.join('', file);
    const parsedDoc = await generateDocumentation(filePath);
    console.log(
      `${index + 1}/${apiFiles.length} B. Documentation generated for ${file}`
    );

    try {
      fs.writeFileSync(
        `${BASE_PATH}/swagger-${index}.json`,
        JSON.stringify(parsedDoc, null, 2)
      );

      swaggerSpec.paths = { ...swaggerSpec.paths, ...parsedDoc.paths };
      writeToFile(`${BASE_PATH}/swagger-${filePath}.json`, swaggerSpec);

      console.log(
        `${index + 1}/${
          apiFiles.length
        } C. Paths updated for ${file} \n\n ---\n\n`
      );
    } catch (error) {
      console.error(
        `${index + 1}/${apiFiles.length} Failed to parse JSON for ${file}`
      );
    }
  }

  try {
    writeToFile(`${BASE_PATH}/swagger-base.json`, swaggerSpec);

    // Delete all files in the docs folder except for the swagger-base.json file
    fs.readdirSync(BASE_PATH).forEach((file) => {
      if (file !== 'swagger-base.json') {
        fs.unlinkSync(path.join(BASE_PATH, file));
      }
    });

    console.log(
      `Swagger documentation generated with AI at ${BASE_PATH}/swagger-base.json`
    );
  } catch (error) {
    console.error('Failed to write Swagger documentation:', error);
  }
};

processAllAPIFiles();

const writeToFile = (fileName: string, data: any, indent = 2) => {
  fs.writeFileSync(fileName, JSON.stringify(data, null, indent));
};
