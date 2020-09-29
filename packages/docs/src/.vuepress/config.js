/**
 * @fileoverview VuePress 配置
 */

module.exports = {
  title: '前端知识库指南',
  description: '前端知识库指南',
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    sidebarDepth: 2,
    // repo: '',
    // docsRepo: '',
    docsDir: 'packages/docs/src',
    docsBranch: 'master',
    lastUpdated: '最后更新时间',
    editLinks: true,
    editLinkText: '帮助我改进页面内容！',
    nav: [
      { text: '首页', link: '/' },
      { text: '代码风格', link: '/code-style/' },
      { text: '单元测试', link: '/unit-test/' },
      { text: '对接标准', link: '/unit-test/' },
      { text: '新人指南', link: '/unit-test/' },
      { text: '工具插件', link: '/unit-test/' },
    ],
    sidebar: {},
  },
}
