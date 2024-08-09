/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://matt.kharrl.com',
    generateRobotsTxt: true,
    alternateRefs: [
        {
            href: 'https://kharrl.com',
            hrefLang: 'en'
        },
        {
            href: 'https://mattkharrl.com',
            hrefLang: 'en'
        }
    ],
}