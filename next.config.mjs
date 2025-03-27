/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com', 'plus.unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: 'http://www.icsthm.com',
        destination: 'https://icsthm.com',
        permanent: true,
      },
      {
        source: 'http://icsthm.com',
        destination: 'https://icsthm.com',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
