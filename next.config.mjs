/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.apple.com',
          port: '',
          pathname: '/**', 
        },
        {
            protocol: 'https',
            hostname: 'static2.realme.net',
            port: '',
            pathname: '/**', 
          },
        {
          protocol: 'https',
          hostname: 'images.samsung.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.kemik.gt',
          port: '',
          pathname: '/**', 
        },
        {
          protocol: 'https',
          hostname: 'amateurphotographer.com',
          port: '',
          pathname: '/**', 
        },
        {
          protocol: 'https',
          hostname: 'global.hisense.com',
          port: '',
          pathname: '/**', 
        },
      
      ],
    },
  };
  
  export default nextConfig;
  