/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-cdn-ak.spotifycdn.com",
      },
    ],
  },
};

export default nextConfig;
