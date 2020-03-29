// let GithubV3=require('@vssue/api-github-v3')
module.exports = {
  plugins: [
    ['@vssue/vuepress-plugin-vssue', {
      autoCreateIssue: true,
      // Accept: application/vnd.github.v3+json,
      locale: 'zh',
      platform: 'github',
      owner: 'wangtager',
      repo: 'blog',
      // github
      clientId: '2e5c7372cce3eff6fdc7',
      clientSecret: '743792ad67a4be3e975cfcfc201c60a04019ab95'
      // gitee
      // clientId: 'fc59d37d93bbb87ba37d60a38f0e6993804e7fe2926a92e8ed4441e71aeac600',
      // clientSecret: 'd5dd71991ec7573c68a0745e46404624b26ed59fd18048bc996a7a1f0ecf7020'
      // proxy: url => `https://api.github.com?target=https://api.github.com`
    }],
    '@vuepress/back-to-top'
  ],
  base: '/',
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
  // extend: '@vuepress/theme-blog',
  // theme: '@vuepress/theme-blog',
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
          { text: 'Graph', link: '/graph/svgCircleProgress' },
          { text: '前端性能优化', link: '/performance/render' },
          { text: '高效编辑器', link: '/sublime/sublime' },
        ]
     },
      { text: 'External', link: 'https://google.com' }
    ],
    displayAllHeaders: true,
    sidebar: [
      // ['/sublime', 'Sublime 插件和配置文件的版本控制'],
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
          '/graph/svgCircleProgress',
          '/graph/animation'
        ]
      },
      {
        title: '前端性能优化',
        children: [
          '/performance/render'
        ]
      },
      {
        title: '高效编辑器',
        children: [
          '/sublime/sublime',
          '/sublime/keyBinding',
        ]
      }
  ],
    sidebarDepth: 1
  }
}
