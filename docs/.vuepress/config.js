// let GithubV3=require('@vssue/api-github-v3')
module.exports = {
  plugins: [
  // '@vuepress/theme-blog',
    // '@vssue/api-github-v3',
    // [
    //   '@vssue/vuepress-plugin-vssue',
    //   {
    //     locale: 'zh',
    //     // 设置要使用的平台 api
    //     // api: GithubV3,
    //     // 设置 `platform` 而不是 `api`
    //     platform: 'github',

    //     // 其他的 Vssue 配置
    //     owner: 'wangtager',
    //     repo: 'blog',
    //     // clientId: 'b3e5558b17c4a52f8d98',
    //     // clientSecret: '73c0830a0dea90562d950d06846e87bd66393efa'
    //     // 本地
    //     clientId:'3e010a9999886c6c6e1c',
    //     clientSecret:'9a64800d2be2cab9887bda67177cc2beebf1681c',
    //     // Accept: 'application/vnd.github.v3+json'
    //   }
    // ],
    ['@vssue/vuepress-plugin-vssue', {
      // Accept: application/vnd.github.v3+json,
      locale: 'zh',
      platform: 'github',
      owner: 'wangtager',
      repo: 'blog',
      // clientId: 'b3e5558b17c4a52f8d98',
      // clientSecret: '73c0830a0dea90562d950d06846e87bd66393efa'
      // 本地
      clientId: '2e5c7372cce3eff6fdc7',
      clientSecret: '743792ad67a4be3e975cfcfc201c60a04019ab95'
      // proxy: url => `https://api.github.com?target=${url}`
      // proxy: url => {
      //   console.log('url=============', url)
      //   return `https://api.github.com?target=${url}`
      // }
    }],
    '@vuepress/back-to-top'
  ],
  // base: '/blog/',
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
