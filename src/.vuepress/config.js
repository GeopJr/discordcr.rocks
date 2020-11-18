const {
  description
} = require('../../package')

const autometa_options = {
  site: {
    name: 'discordcr.rocks'
  },
  image: false,
  canonical_base: 'https://discordcr.rocks'
};

module.exports = {
  title: 'discordcr Guide',
  description: description,
  head: [
    ['link', {
      rel: 'icon',
      href: '/images/icon.png'
    }],
    ['meta', {
      name: 'og:image',
      content: '/images/icon.png'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#000100'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }]
  ],
  plugins: {
    '@vuepress/back-to-top': true,
    'autometa': autometa_options
  },
  theme: "yuu",
  themeConfig: {
    repo: 'GeopJr/discordcr.rocks',
    editLinks: true,
    editLinkText: 'Edit',
    lastUpdated: true,
    yuu: {
      defaultDarkTheme: true,
      disableThemeIgnore: true,
      labels: {
				darkTheme: "Dark Theme"
			}
    },
    nav: [{
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Docs',
        ariaLabel: 'Docs Menu',
        items: [{
            text: 'discordcr Docs',
            link: 'https://discordcr.geopjr.xyz/' //temp
          },
          {
            text: 'Crystal Docs',
            link: 'https://crystal-lang.org/api/latest/'
          },
          {
            text: 'Discord Docs',
            link: 'https://discord.com/developers/docs'
          }
        ]
      },
    ],
    sidebar: {
      '/guide/': [{
          title: 'Intro',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Installation & Initialization',
          collapsable: false,
          children: [
            'installation/',
            'installation/discordcr',
            'installation/editor'
          ]
        }
      ]
    }
  }
}
