import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const pub = resolve(here, '..', 'public');
const svgPath = resolve(pub, 'favicon.svg');
const svg = readFileSync(svgPath);

const sizes = [
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

for (const { name, size } of sizes) {
  const out = resolve(pub, name);
  await sharp(svg, { density: 384 }).resize(size, size).png().toFile(out);
  console.log(`✓ ${name} (${size}×${size})`);
}

const ico = await pngToIco([
  resolve(pub, 'favicon-16.png'),
  resolve(pub, 'favicon-32.png'),
  resolve(pub, 'favicon-48.png'),
]);
writeFileSync(resolve(pub, 'favicon.ico'), ico);
console.log('✓ favicon.ico (16+32+48 multi-size)');
