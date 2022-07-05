/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    MONGO_URI:
      "mongodb+srv://tuankietcoder:01629402815@tuankietcoderblog.euzbd.mongodb.net/?retryWrites=true&w=majority",
    MONGO_DB: "tuankietcoder_db",
  },
};

module.exports = nextConfig;
