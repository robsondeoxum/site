import fs from 'fs';
import { execSync } from 'child_process';

// 1. Prepare index.html for building by copying index.dev.html
if (fs.existsSync('index.dev.html')) {
  console.log('Preparing index.html from index.dev.html...');
  fs.copyFileSync('index.dev.html', 'index.html');
} else {
  console.log('No index.dev.html found. Using existing index.html...');
}

// 2. Run the actual vite build
console.log('Running Vite build...');
try {
  execSync('npx vite build', { stdio: 'inherit' });
} catch (error) {
  console.error('Vite build failed:', error);
  process.exit(1);
}

// 3. Move index.html back to index.dev.html if it does not exist to preserve it
if (!fs.existsSync('index.dev.html') && fs.existsSync('index.html')) {
  fs.copyFileSync('index.html', 'index.dev.html');
}

// 4. Copy build outputs to the root for direct GitHub Pages upload
console.log('Copying production files to root for GitHub Pages compatibility...');

// Copy index.html
if (fs.existsSync('dist/index.html')) {
  fs.copyFileSync('dist/index.html', 'index.html');
}

// Copy assets
if (!fs.existsSync('assets')) {
  fs.mkdirSync('assets');
}
if (fs.existsSync('dist/assets')) {
  const files = fs.readdirSync('dist/assets');
  for (const file of files) {
    fs.copyFileSync(`dist/assets/${file}`, `assets/${file}`);
  }
}

// Copy favicon and webmanifest
if (fs.existsSync('dist/favicon.png')) {
  fs.copyFileSync('dist/favicon.png', 'favicon.png');
}
if (fs.existsSync('dist/site.webmanifest')) {
  fs.copyFileSync('dist/site.webmanifest', 'site.webmanifest');
}

console.log('Build and post-processing completed successfully! Ready for GitHub Pages.');
