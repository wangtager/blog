module.exports = {
  base: '/blog/',
  title: 'Tager Blog',
  content: 'HTML, CSS, XML, XHTML, JavaScript, Vue',
  description: '与其临渊羡鱼，不如退而结网', 
  markdown: {
    // 显示代码行号
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  themeConfig: {
    repo: 'wangtager/blog',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    displayAllHeaders: true,
    editLinkText: '在 GitHub 上编辑此页',
    // 文档更新时间：每个文件git最后提交的时间,
    lastUpdated: 'Last Updated' ,
    navbar: true,
    nav: [
      { 
        text: '前端栈', 
        items: [
          { text: 'Javascript', link: '/javascript/debounce' },
          { text: '前端性能优化', link: '/performance' },
          { text: 'NodeJs', link: '/nodejs' }
        ]
     },
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