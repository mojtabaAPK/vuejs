import fs from 'fs';
import path from 'path';
import javascriptObfuscator from 'javascript-obfuscator';

const inputDir = path.join(process.cwd(), 'dist', 'assets');

console.log('Input Directory:', inputDir);

fs.readdirSync(inputDir).forEach((file) => {
    if (file.endsWith(".js")) {
        const inputPath = path.join(inputDir, file);

        const code = fs.readFileSync(inputPath, "utf-8");

        const obfuscatedCode = javascriptObfuscator.obfuscate(code, {
            compact: true,
            controlFlowFlattening: true,
            stringArray: true,
            stringArrayEncoding: ["rc4"],
            stringArrayThreshold: 0.75,
        }).getObfuscatedCode();

        fs.writeFileSync(inputPath, obfuscatedCode);
        console.log(`Obfuscated: ${file}`);
    }
});

console.log("Done...");
