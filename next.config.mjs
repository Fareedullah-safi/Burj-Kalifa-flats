/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbopack: false, // disable turbopack
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    base: process.env.base_env || "/Burj-Kalifa"
};

export default nextConfig;
