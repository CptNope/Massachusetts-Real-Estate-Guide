import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Simple function to create a basic PNG icon using canvas in Node
// This creates a simple gradient icon with "MA" text

const createIcon = (size) => {
  const canvas = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <defs>
        <linearGradient id="grad${size}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#38bdf8;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="${size}" height="${size}" fill="url(#grad${size})" rx="${size * 0.15}"/>
      
      <!-- House icon -->
      <g fill="white" transform="translate(${size * 0.15}, ${size * 0.25})">
        <!-- Roof -->
        <path d="M 0 ${size * 0.2} L ${size * 0.35} 0 L ${size * 0.7} ${size * 0.2} L ${size * 0.63} ${size * 0.2} L ${size * 0.63} ${size * 0.25} L ${size * 0.07} ${size * 0.25} L ${size * 0.07} ${size * 0.2} Z"/>
        
        <!-- House body -->
        <rect x="${size * 0.07}" y="${size * 0.25}" width="${size * 0.56}" height="${size * 0.42}" rx="${size * 0.02}"/>
        
        <!-- Door -->
        <rect x="${size * 0.26}" y="${size * 0.42}" width="${size * 0.2}" height="${size * 0.28}" fill="#0ea5e9" rx="${size * 0.01}"/>
        
        <!-- Windows -->
        <rect x="${size * 0.12}" y="${size * 0.3}" width="${size * 0.11}" height="${size * 0.11}" fill="#0ea5e9" rx="${size * 0.01}"/>
        <rect x="${size * 0.47}" y="${size * 0.3}" width="${size * 0.11}" height="${size * 0.11}" fill="#0ea5e9" rx="${size * 0.01}"/>
      </g>
    </svg>
  `;
  return canvas;
};

// Create icons directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate SVG icons
const icon192 = createIcon(192);
const icon512 = createIcon(512);

fs.writeFileSync(path.join(publicDir, 'icon-192.svg'), icon192);
fs.writeFileSync(path.join(publicDir, 'icon-512.svg'), icon512);

console.log('✓ Generated icon-192.svg');
console.log('✓ Generated icon-512.svg');
console.log('\nNote: For production, convert these SVGs to PNG using:');
console.log('  npm install -g sharp-cli');
console.log('  sharp -i public/icon-192.svg -o public/icon-192.png');
console.log('  sharp -i public/icon-512.svg -o public/icon-512.png');
