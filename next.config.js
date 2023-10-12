const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    LAUNCHES_API: 'https://callix-api-799d885cf5e5.herokuapp.com/launches',
    NEXT_PUBLIC_NEXT_PUBLIC_LAUNCHES_API: 'https://callix-api-799d885cf5e5.herokuapp.com/launches',
    NEXT_PUBLIC_GA_MEASUREMENT_ID: 'G-L8DD49XY3N',
    NEXT_PUBLIC_EXPERIMENT_ID: 'dnw7Su3cRt2ISTGpfAEd4w',
    NEXT_PUBLIC_OPTIMIZE_ID: 'OPT-MVFFR7Z',
  },
});
