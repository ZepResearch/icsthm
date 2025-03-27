/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com', 'plus.unsplash.com'],
  },
  experimental: {
    serverActions: {},
  },
  async redirects() {
    return [
      {
        source: "/:path*", 
        has: [{ type: "host", value: "www.icsthm.com" }],
        destination: "https://icsthm.com/:path*", 
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
