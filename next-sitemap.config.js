const SITE_URL = process.env.SITE_URL || 'https://next-site-ivory-six.vercel.app/';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true, // (optional)
  //generateIndexSitemap: false
  // ...other options
}
