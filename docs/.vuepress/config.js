module.exports = {
  title: 'FE Tager',
  content: 'HTML, CSS, XML, XHTML, JavaScript, Vue',
  description: '前端知识',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    navbar: true,
    nav: [
      { text: 'TEST', link: '/javascript/home/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    displayAllHeaders: true,
    sidebar: {
      '/javascript/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ]
    }
  }
}