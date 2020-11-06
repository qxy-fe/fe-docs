/**
 * @fileoverview VuePress 配置
 */

module.exports = {
  base: '/fe-docs/',

  title: '前端知识库指南',

  description: '前端知识库指南',

  plugins: ['@vuepress/back-to-top', 'copy-code', 'right-anchor'],

  themeConfig: {
    sidebarDepth: 2,
    repo: 'qxy-fe/fe-docs',
    docsRepo: 'qxy-fe/fe-docs',
    docsDir: 'packages/docs/src',
    docsBranch: 'master',
    lastUpdated: '最后更新时间',
    editLinks: true,
    editLinkText: '帮助我改进页面内容！',
    nav: [
      { text: '首页', link: '/' },
      { text: '代码风格', link: '/code-style/' },
      { text: '单元测试', link: '/unit-test/' },
      { text: '对接标准', link: '/co-worker/' },
      { text: '新人指南', link: '/guide-book/' },
      { text: '工具插件', link: '/utils-lib/git' },
    ],
    sidebar: {
      '/code-style/': [
        {
          title: '代码风格',
          collapsable: false,
          children: ['html'],
        },
      ],
      '/unit-test/': [
        {
          title: '单元测试',
          collapsable: false,
          children: [''],
        },
      ],
      '/co-worker/': [
        {
          title: '对接标准',
          collapsable: false,
          children: [''],
        },
      ],
      '/guide-book/': [
        {
          title: '新人指南',
          collapsable: false,
          children: [''],
        },
      ],
      '/utils-lib/': [
        {
          title: '工具插件',
          collapsable: false,
          children: ['git', 'vscode', 'eslint', 'husky', 'lint-staged'],
        },
      ],
    },
  },
}
