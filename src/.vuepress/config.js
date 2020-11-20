const {
  description
} = require('../../package'),
  head = require('./head'),
  nav = require('./nav'),
  sidebar = require('./sidebar');

// Add collapsable: false to each one unless it's true
Object.values(sidebar).forEach(x => {
    x.map(y => y.collapsable = y.collapsable || false)
})

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
  head,
  plugins: {
    '@vuepress/back-to-top': true,
    'autometa': autometa_options
  },
  theme: "yuu",
  themeConfig: {
    repo: 'GeopJr/discordcr.rocks',
    docsDir: "src",
    docsBranch: "main",
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
    nav,
    sidebar
  }
}
