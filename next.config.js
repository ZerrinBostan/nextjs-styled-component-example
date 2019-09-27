module.exports = {
  // some configuration
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://aslanyi.github.io/nextjs-styled-component-example' : '',
  // another configuration
};