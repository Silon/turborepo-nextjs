const withAppEnvs = require('./scripts/withAppEnvs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg);

/** @type {import('next').NextConfig} */
module.exports = compose(
  withAppEnvs,
  withBundleAnalyzer,
)({
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
});