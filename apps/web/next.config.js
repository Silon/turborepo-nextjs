/* eslint-disable */

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

const withAppEnvs = require("./scripts/withAppEnvs");
const withSvgLoader = require("./scripts/withSvgLoader");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((composed, f) => f(composed), arg);

/** @type {import('next').NextConfig} */
module.exports = compose(
  withAppEnvs,
  withSvgLoader,
  withBundleAnalyzer,
  withNextIntl,
)({
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  experimental: {
    typedRoutes: true,
  },
});
