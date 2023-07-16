const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc()({
  reactStrictMode: true,
  pageExtensions: ['js', 'md', 'mdoc'],
  images: {
    unoptimized: true
  },
  // redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/guide',
  //       permanent: false
  //     }
  //   ];
  // },
  rewrites() {
    return [
      {
        source: '/spec',
        destination: '/spec.html'
      }
    ];
  }
});
