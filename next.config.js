const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  serverRuntimeConfig: {
    NEXT_PUBLIC_LAUNCHES_API: process.env.NEXT_PUBLIC_LAUNCHES_API,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_LAUNCHES_API: process.env.NEXT_PUBLIC_LAUNCHES_API,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_EXPERIMENT_ID: process.env.NEXT_PUBLIC_EXPERIMENT_ID,
    NEXT_PUBLIC_OPTIMIZE_ID: process.env.NEXT_PUBLIC_OPTIMIZE_ID,
  },
});
