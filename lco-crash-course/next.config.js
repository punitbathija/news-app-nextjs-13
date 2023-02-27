/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MONGOURI:
      "mongodb+srv://punitbathija:E071247prb@nextjs.1gcih0k.mongodb.net/nextjsdb?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
