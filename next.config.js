const withImages = require("next-images");

module.exports = withImages({
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    // domains: ['https://img.cdn.whoops.world/'],
  },
});
