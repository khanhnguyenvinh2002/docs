/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hyperedge-docs.web.app',
  generateRobotsTxt: true,
  async additionalPaths(config) {
    return [await config.transform(config, '/spec')];
  }
};
