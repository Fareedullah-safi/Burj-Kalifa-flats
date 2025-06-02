/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {}, // ✅ Use an object, not `true`
        // Remove or correctly configure 'turbopack' if needed
    },
}

export default nextConfig
