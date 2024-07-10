/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const dotenv = require("dotenv");

const rootDir = path.resolve(__dirname, "../..");

async function createEnvTypesFile() {
  const result = {};
  const files = await fs.promises.readdir(rootDir);
  const envFiles = files.filter(
    (file) => file.startsWith(".env") && !file.endsWith(".template"),
  );

  for (const file of envFiles) {
    const filePath = path.resolve(rootDir, file);
    const parsed = dotenv.parse(await fs.promises.readFile(filePath));

    for (const [key, value] of Object.entries(parsed)) {
      result[key] = typeof value;
    }
  }

  const envTypes = Object.entries(result)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const fileContent = `
/* eslint-disable */  
// This file was generated automatically by buildEnvTypeFile.js script
// Please do not modify it manually
  
declare namespace NodeJS { 
  export interface ProcessEnv {
${envTypes} 
  } 
}`;

  await fs.promises.writeFile(
    path.resolve(rootDir, "environment.d.ts"),
    fileContent,
  );
}

(async () => {
  try {
    await createEnvTypesFile();
  } catch (error) {
    console.error("\u001B[31mError creating environment types file:", error);
    process.exit(1);
  }
})();
