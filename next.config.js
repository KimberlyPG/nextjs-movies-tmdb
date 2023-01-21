/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env:{
    apiKey: process.env.NEXT_API_KEY,
    sessionId: process.env.NEXT_SESSION_ID,
    secret: process.env.JWT_SECRET
  },
  images: {
    domains: ['static-cdn.jtvnw.net'],
  },
}
