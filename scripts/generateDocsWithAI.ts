import fs from 'fs';
import path from 'path';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const apiFolderPath = 'src/pages/api/v1';

const generateDocumentation = async (filePath: string) => {
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

    const parsedDoc = JSON.parse(rawResponse); // Ensure it's a valid JSON

    // 🔥 If the response isn't a valid Swagger JSON, return empty structure
    if (!parsedDoc.paths) {
      return { paths: {} };
    }

    return parsedDoc;
  } catch (error) {
    console.error(`Error generating documentation for ${filePath}:`, error);
    return { paths: {} }; // Return empty structure on error
  }
};

// 🔥 Recursive function to get all `.ts` files inside nested directories
const getAllFiles = (dirPath: string): string[] => {
  let files: string[] = [];
  fs.readdirSync(dirPath).forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Recursively scan subdirectories
      files = [...files, ...getAllFiles(fullPath)];
    } else if (file.endsWith('.ts')) {
      files.push(fullPath);
    }
  });
  return files;
};

const processAllAPIFiles = async () => {
  const apiFiles = getAllFiles(apiFolderPath);

  const swaggerSpec = {
    openapi: '3.0.0',
    info: { title: 'The Boring Education API', version: '1.0.0' },
    paths: {},
  };

  const BASE_PATH = './public/docs';

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
      // Also store the parsedDoc in a file
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
