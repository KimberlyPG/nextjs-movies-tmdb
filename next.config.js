/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env:{
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    sessionId: process.env.NEXT_PUBLIC_SESSION_ID,
    // secret: process.env.JWT_SECRET
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    domains: [
      'https://heartfelt-gecko-b08628.netlify.app/',
    ]
  },
}
