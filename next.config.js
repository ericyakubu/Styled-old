/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        //needed so that styled components can take effect
        styledComponents: true,
    },
    async redirects() {
        //needed so that we won't need to create a seperate page for canceled payments. therefore, everytime someone will try to go to /canceled they'll be redirected to homepage
        return [{ source: "/canceled", destination: "/", permanent: true }];
    },
};

module.exports = nextConfig;
