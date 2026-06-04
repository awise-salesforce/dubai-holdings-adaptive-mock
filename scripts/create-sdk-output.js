#!/usr/bin/env node

/**
 * Creates mock-sdk-output.js compatible with the Tampermonkey injection script.
 * Produces the same addControllerToPage() / addAppToPage() format as the real SDK.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Build the app (CSS will be injected by JS)
console.log('Building mock app...');
execSync('npx vite build', { cwd: rootDir, stdio: 'inherit' });

// Build the controller entry separately
console.log('\nBuilding mock controller...');
execSync('npx vite build --config vite.controller.config.js', { cwd: rootDir, stdio: 'inherit' });

const appPath = path.join(rootDir, 'dist', 'app.js');
const controllerPath = path.join(rootDir, 'dist', 'controller.js');
const outputPath = path.join(rootDir, 'dist', 'mock-sdk-output.js');

if (!fs.existsSync(appPath)) {
  console.error('Error: dist/app.js not found');
  process.exit(1);
}

if (!fs.existsSync(controllerPath)) {
  console.error('Error: dist/controller.js not found');
  process.exit(1);
}

const appContents = fs.readFileSync(appPath, 'utf8');
const controllerContents = fs.readFileSync(controllerPath, 'utf8');

const output = `function addControllerToPage() {
  // Mock controller - sets up window.AdaptiveWebsite with hardcoded responses
${controllerContents}
}

function addAppToPage() {
  // Mock React app - Dubai Holdings Adaptive Web Agent UI
${appContents}
}

// Export functions to window for global access
window.addControllerToPage = addControllerToPage;
window.addAppToPage = addAppToPage;
`;

fs.writeFileSync(outputPath, output);
const sizeKB = Math.round(fs.statSync(outputPath).size / 1024);
console.log(`\nCreated: dist/mock-sdk-output.js (${sizeKB}KB)`);
console.log('Use this file with the Tampermonkey script.');
