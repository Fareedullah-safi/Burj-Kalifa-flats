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
};

export default nextConfig;
