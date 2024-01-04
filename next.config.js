/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
            },
            {
                hostname: "images.pexels.com",
            },
        ],
    },
};

module.exports = nextConfig
