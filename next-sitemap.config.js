/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://houseofwellnessbyn.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://houseofwellnessbyn.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: [
    '/404*',
    '/500*',
  ],
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  outDir: 'public',
};
