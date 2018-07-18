const siteConfig = {
  title: 'System Designer',
  tagline: 'An IDE for designing systems',
  url: 'https://designfirst.io',
  baseUrl: '/systemdesigner/documentation/',

  projectName: '',
  organizationName: '',

  headerLinks: [
    { doc: 'what-is-system-designer', label: 'Documentation' },
    { href: 'https://github.com/design-first/system-designer/issues', label: 'Support' },
    { href: 'https://github.com/design-first/system-designer', label: 'Github' }
  ],

  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#f8f8f8',
    secondaryColor: '#f8f8f8'
  },

  copyright: 'System Designer is distributed under Apache License 2.0 - Copyright © 2018 Erwan Carriou',

  highlight: {
    theme: 'zenburn'
  },

  scripts: [
    '../js/links-website.js',
    '../js/clipboard.js',
    '../js/copy.js'
  ],

  onPageNav: 'separate',
  scrollToTop: true,
  disableHeaderTitle: false

};

module.exports = siteConfig;