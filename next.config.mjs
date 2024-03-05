/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pixellperfect.ru',
        port: '',
        pathname: '/uploads/**'
      },
    ],
  },
};

export default nextConfig;
