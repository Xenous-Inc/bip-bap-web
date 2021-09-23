/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
        BASE_URL: process.env.BASE_URL,
    },
};
