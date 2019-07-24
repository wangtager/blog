module.exports = {
  base: '/blog/',
  title: 'Tager Blog',
  content: 'HTML, CSS, XML, XHTML, JavaScript, Vue',
  description: '前端知识',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  themeConfig: {
    repo: 'wangtager/blog',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    displayAllHeaders: true,
    navbar: true,
    nav: [
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
    sidebar: [
      {
        title: 'Javascript',
        children: [
          '/javascript/debounce',  /* /foo/one.html */
          '/javascript/httpCache',   /* /foo/two.html */
          '/javascript/constructorFunction'
        ]
      },
      {
        title: '前端性能优化',
        children: [
          '/performance/'
        ]
      }
  ],
    sidebarDepth: 2
  }
}