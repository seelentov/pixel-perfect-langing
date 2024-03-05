/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pixellperfect.ru',
  generateRobotsTxt: true,
  sitemapSize: 7000,
}