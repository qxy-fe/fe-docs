/**
 * @fileoverview VitePress 配置
 */

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: `前端知识库指南`,

  description: `前端知识库指南`,

  head: [],

  themeConfig: {
    logo: `/favicon.ico`,

    footer: {
      message: ``,
      copyright: `Copyright © 2019-present qxy-fe. All Rights Reserved.`,
    },

    nav: [{ text: `首页`, link: `/` }],

    sidebar: {},
  },
})
