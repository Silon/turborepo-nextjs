/* eslint-disable */

const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "../..");
const envDir = path.resolve(rootDir, "env");

const getPrivateEnvError = (file, key, value) => `
❌ NEXT_PUBLIC env vars are not allowed in root .env files.\n 

File: ${file}
Env: ${key}=${value} \n

- If you're sure this env is not secret and can be shared, please move it to /env/.env.[APP_ENV]
- If this env is secret and cannot be shared, please remove NEXT_PUBLIC prefix from it
`;

const getPublicEnvError = (file, key, value) => `
// ❌ Only NEXT_PUBLIC env vars are allowed in ./env/.env[...] files. \n

// File: ./env/${file}
// Env: ${key}=${value} \n

// - If you're sure this env is secret and cannot be shared, please move it to root .env file
// - If this env is not secret and can be shared, please add NEXT_PUBLIC prefix to it
`;

module.exports = function buildEnvTypeFile() {
  function getEnvs(options) {
    const { public: isPublic } = options;
    const dir = isPublic ? envDir : rootDir;
    const result = {};

    fs.readdirSync(dir)
      .filter((file) => file.startsWith(".env") && !file.endsWith(".template"))
      .forEach((file) => {
        const filePath = path.resolve(dir, file);
        const parsed = dotenv.parse(fs.readFileSync(filePath));

        Object.entries(parsed).forEach(([key, value]) => {
          if (isPublic && !key.startsWith("NEXT_PUBLIC")) {
            console.error(
              "\x1b[31m%s\x1b[0m",
              getPublicEnvError(file, key, value),
            );
            process.exit(1);
          } else if (!isPublic && key.startsWith("NEXT_PUBLIC")) {
            console.error(
              "\x1b[31m%s\x1b[0m",
              getPrivateEnvError(file, key, value),
            );
            process.exit(1);
          }
          result[key] = value;
        });
      });

    return result;
  }

  function getEnvTypes() {
    const result = [];

    fs.readdirSync(envDir)
      .filter((file) => file.startsWith(".env"))
      .forEach((file) => {
        const envName = file.replace(".env.", "");
        result.push(envName);
      });

    return result;
  }

  const privateEnvs = getEnvs({ public: false });
  const publicEnvs = getEnvs({ public: true });
  const envTypes = getEnvTypes();

  const envs = {
    ...privateEnvs,
    ...publicEnvs,
  };

  const privateEnvsString = Object.keys(privateEnvs)
    .map((key) => `${key}: string`)
    .join("\n");
  const publicEnvsString = Object.keys(publicEnvs)
    .map((key) => `${key}: string`)
    .join("\n");

  const envVarsFileContent = `
/* eslint-disable */  
// This file was generated automatically by buildEnvTypeFile.js script
// Please do not modify it manually
  
declare namespace NodeJS { 
  export interface ProcessEnv {

    NODE_ENV: ${envTypes.map((val) => `"${val}"`).join(" | ")};\n

// Public env vars
${publicEnvsString} 

// Private env vars
${privateEnvsString}

  } 
}`;

  fs.writeFileSync(
    path.resolve(rootDir, "environment.d.ts"),
    envVarsFileContent,
  );

  console.log(
    "✅ Environment type file generated successfully (environment.d.ts)",
  );
};
