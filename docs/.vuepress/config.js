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
          { text: 'NodeJs', link: '/nodejs/' },
          { text: 'Graph', link: '/graph/' },
          { text: '前端性能优化', link: '/performance/' }
        ]
     },
      { text: 'External', link: 'https://google.com' }
    ],
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Javascript',
        children: [
          '/javascript/debounce',  /* /foo/one.html */
          '/javascript/httpCache',   /* /foo/two.html */
          '/javascript/constructorFunction',
          '/javascript/decorator'
        ]
      },
      {
        title: 'NodeJs',
        children: [
          '/nodejs/'
        ]
      },
      {
        title: '图形动画',
        children: [
          '/graph/svgCircleProgress'
        ]
      },
      {
        title: '前端性能优化',
        children: [
          '/performance/render'
        ]
      }
  ],
    sidebarDepth: 2
  }
}