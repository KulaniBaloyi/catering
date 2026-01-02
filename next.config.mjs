
const nextConfig = {
  cacheComponents: true,
  logging:{
    fetches:{
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'unsplash.com' },
      {protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
};

export default nextConfig;