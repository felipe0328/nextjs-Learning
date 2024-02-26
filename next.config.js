/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:{
            allowedOrigins: ['192.168.80.14:3000']
        },
    },
};

module.exports = nextConfig;
