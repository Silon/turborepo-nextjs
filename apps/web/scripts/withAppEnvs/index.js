/* eslint-disable */

const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const buildEnvTypeFile = require("./buildEnvTypeFile");

function getAppEnvs() {
  const projectDir = process.cwd();

  let APP_ENV = process.env.APP_ENV || process.env.NODE_ENV;

  if (!APP_ENV) {
    throw new Error("APP_ENV is undefined");
  }

  const envFilePath = path.join(projectDir, "env", `.env.${APP_ENV}`);

  if (!fs.existsSync(envFilePath)) {
    throw new Error(`.env.${APP_ENV} file not found`);
  }

  // Create object from .env file
  const envsObject = dotenv.parse(fs.readFileSync(envFilePath));

  console.log("\x1b[33m%s\x1b[0m", "⚙️ Using env file:", envFilePath);

  return {
    APP_ENV: APP_ENV,
    ...envsObject,
  };
}

/**
 * @name loadAppEnvs
 * @description This function will be called in next.config.js to load the env variables from ./env/ directory.
 * It will also create a .environment.d.ts file with the types of the env variables.
 * @returns {Object} The env variables
/** @type {import('next').NextConfig} */
module.exports = function (nextConfig) {
  const envs = getAppEnvs();

  buildEnvTypeFile();

  process.env = { ...process.env, ...envs };

  return {
    ...nextConfig,
    env: {
      ...nextConfig.env,
      ...envs,
    },
  };
};
