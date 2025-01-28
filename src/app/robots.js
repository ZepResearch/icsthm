

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/about-conference',
        '/about-zep-research',
        '/awards',
        '/committee',
        '/contact',
        '/highlights',
        '/mode-of-presentation',
        '/papers-format',
        '/payment',
        '/registration',
        '/schedule',
        '/sponsorship',
        '/submission',
        '/theme-and-topics',
        '/venue',
        '/Legal-Link/cancellation-policy',
        '/Legal-Link/privacy-policy',
        '/Legal-Link/terms-and-conditions'
      ],
      disallow: [
        '/api/*',  // Protect API routes
        '/admin/*', // Protect admin routes if any
        '/*.json$', // Prevent access to JSON files
        '/*.xml$'   // Prevent direct XML access
      ]
    },
    sitemap: 'https://www.icsthm.com/sitemap.xml',
    host: 'https://www.icsthm.com'
  }
}