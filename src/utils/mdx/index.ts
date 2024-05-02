import fs from 'fs';
import path from 'path';

const getMDXContent = () => {
  const mdFilePath = path.join(
    process.cwd(),
    'src',
    'utils',
    'mdx',
    'testing.md'
  );
  const mdxPayload = fs.readFileSync(mdFilePath, 'utf8');
  return mdxPayload;
};

export { getMDXContent };
