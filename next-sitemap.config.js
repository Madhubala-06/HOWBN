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
        disallow: ['/api/*', '/admin/*'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/*', '/admin/*'],
      },
    ],
  },
  exclude: [
    '/404*',
    '/500*',
    '/api/*',
    '/admin/*',
    '/_next/*',
  ],
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: {
    '/': 1.0,
    '/blog': 0.8,
    '/blog/*': 0.7,
    '/programs': 0.9,
    '/about': 0.6,
    '/contact': 0.6,
  },
  transform: async (config, path) => {
    // Custom priority for specific pages
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Blog posts get higher priority and different change frequency
    if (path.startsWith('/blog/') && !path.includes('/page/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  outDir: 'public',
};