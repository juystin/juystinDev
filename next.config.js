module.exports = {
    images: {
      deviceSizes: [640, 960, 1280, 1920, 2560],
    },
    async rewrites() {
      return [
        // Rewrite everything else to use `pages/index`
        {
          source: '/:path*',
          destination: '/',
        },
      ];
    },
};