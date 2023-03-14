import fs from 'fs';
import path from 'path';

export function getPages() {
  const pagesDirectory = path.join(process.cwd(), 'pages');
  const files = fs.readdirSync(pagesDirectory);
  return files.filter((file) => file.endsWith('.js') && file !== 'index.js').map((file) => file.replace('.js', ''));
}

export default async function handler(req, res) {
  const pages = getPages();
  res.status(200).json(pages);
}
