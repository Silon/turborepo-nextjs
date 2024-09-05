const process = require('node:process')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const createNextIntlPlugin = require('next-intl/plugin')
const withSvgLoader = require('./scripts/with-svg-loader')

const withNextIntl = createNextIntlPlugin()

function compose(...fns) {
  return arg =>
    fns.reduce((composed, f) => f(composed), arg)
}

/** @type {import('next').NextConfig} */
module.exports = compose(
  withSvgLoader,
  withBundleAnalyzer,
  withNextIntl,
)({
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
  experimental: {
    typedRoutes: true,
  },
})
