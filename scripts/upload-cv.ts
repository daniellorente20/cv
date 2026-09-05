import { put } from '@vercel/blob';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pdfPath = join(__dirname, '..', 'pdf', 'cv.pdf');

const buffer = await readFile(pdfPath);

const { url } = await put('cv-2026.pdf', buffer, {
  access: 'public',
  addRandomSuffix: false,
  contentType: 'application/pdf',
});

console.log('CV URL:', url);
