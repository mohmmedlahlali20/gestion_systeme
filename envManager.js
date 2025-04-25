import { readdir, readFile, writeFile, stat } from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';

const srcDir = path.resolve('./src');
const envSet = new Set();

const regex = /import\.meta\.env\.VITE_[A-Z_]+/g;

async function readEnvFile() {
    try {
        const envConfig = dotenv.parse(await readFile('.env', 'utf-8'));
        Object.keys(envConfig).forEach((key) => {
            envSet.add(key);
        });
    } catch (error) {
        console.log('❌ No .env file found.', error);
    }
}

async function extractEnvVarsFromFile(filePath) {
    const content = await readFile(filePath, 'utf-8');
    let match;
    while ((match = regex.exec(content)) !== null) {
        const varName = match[0].replace('import.meta.env.', '');
        envSet.add(varName);
    }
}

async function walkDir(dir) {
    const entries = await readdir(dir);
    for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        const fileStat = await stat(fullPath);

        if (fileStat.isDirectory()) {
            await walkDir(fullPath);
        } else if (/\.(js|jsx|ts|tsx|mjs)$/.test(entry)) {
            await extractEnvVarsFromFile(fullPath);
        }
    }
}

async function generateEnvFile() {
    await readEnvFile();
    await walkDir(srcDir);

    let envContent = '';
    for (const key of envSet) {
        envContent += `${key}=\n`;
    }

    if (envContent) {
        await writeFile('.env', envContent);
        console.log('✅ .env file created successfully!');
    } else {
        console.log('❌ No VITE_ variables found in src/ files.');
    }
}

generateEnvFile().catch(console.error);
