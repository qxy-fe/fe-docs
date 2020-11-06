(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{379:function(t,s,a){"use strict";a.r(s);var e=a(18),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[t._v("#")]),t._v(" ESLint")]),t._v(" "),a("blockquote",[a("p",[t._v("JavaScript 和 TypeScript 代码风格检查与自动修复工具。")])]),t._v(" "),a("h2",{attrs:{id:"原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原则"}},[t._v("#")]),t._v(" 原则")]),t._v(" "),a("ol",[a("li",[t._v("提交至 Git 仓库的代码都应可通过 ESLint 检查且无错误。")]),t._v(" "),a("li",[t._v("禁止以该条规则过于严格作为理由要求关闭该规则检查，但可提出配置不合理，要求修改规则配置。(配置会在合理的范围内越来越严格，帮助提升代码质量)")]),t._v(" "),a("li",[t._v("禁止个人私自关闭项目 ESLint 配置的任何规则，但若有必要可在团队内发起评审后决定是否关闭。")]),t._v(" "),a("li",[t._v("代码受规则影响无法提交时，可"),a("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过注释关闭规则"),a("OutboundLink")],1),t._v("，但应限制禁用规则作用范围尽可能小。")]),t._v(" "),a("li",[t._v("使用注释禁用规则时，需在其上打上 "),a("code",[t._v("// FIXME: eslint")]),t._v(" 注释, Vue 模板中为 "),a("code",[t._v("\x3c!-- FIXME: eslint --\x3e")]),t._v("，并尽快修复。")]),t._v(" "),a("li",[t._v("优先使用命令行 "),a("code",[t._v("--fix")]),t._v(" 参数或者编辑器插件修复所有 "),a("strong",[t._v("可修复的")]),t._v(" 问题，避免浪费时间。")])]),t._v(" "),a("h2",{attrs:{id:"团队规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#团队规则"}},[t._v("#")]),t._v(" 团队规则")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/qxy-fe/configs/tree/master/packages/eslint/config",target:"_blank",rel:"noopener noreferrer"}},[t._v("@qxy/eslint-config"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("基于 "),a("a",{attrs:{href:"https://github.com/standard/eslint-config-standard",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-config-standard"),a("OutboundLink")],1),t._v(" 进行订制。")])]),t._v(" "),a("blockquote",[a("p",[t._v("增加了最大文件行数、嵌套层级、复杂度等利于代码维护的规则限制。")])]),t._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h4",{attrs:{id:"安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @qxy/eslint-config -D\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @qxy/eslint-config -D\n")])])]),a("h4",{attrs:{id:"继承配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承配置"}},[t._v("#")]),t._v(" 继承配置")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v(".eslintrc.js")]),t._v(" 文件:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@qxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Override rules")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("或")]),t._v(" "),a("p",[a("code",[t._v("package.json")]),t._v(" 中配置:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslintConfig"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@qxy"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/qxy-fe/configs/tree/master/packages/eslint/vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@qxy/eslint-config-vue"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("基于 "),a("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/recommended.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-vue:recommended"),a("OutboundLink")],1),t._v(" 预设(最严格)进行配置")])]),t._v(" "),a("blockquote",[a("p",[t._v("增加了所有未列入默认预设的规则，并对其进行了适当的配置。")])]),t._v(" "),a("h3",{attrs:{id:"使用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-2"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h4",{attrs:{id:"安装依赖-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖-2"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @qxy/eslint-config-vue babel-eslint -D\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @qxy/eslint-config-vue babel-eslint -D\n")])])]),a("h4",{attrs:{id:"继承配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承配置-2"}},[t._v("#")]),t._v(" 继承配置")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v(".eslintrc.js")]),t._v(" 文件:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@qxy/vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Override rules")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("或")]),t._v(" "),a("p",[a("code",[t._v("package.json")]),t._v(" 中配置:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslintConfig"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@qxy/vue"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("规则 "),a("a",{attrs:{href:"https://eslint.vuejs.org/rules/no-unsupported-features.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue/no-unsupported-features"),a("OutboundLink")],1),t._v(" 内配置了默认 Vue 版本为 "),a("code",[t._v("^2.6.0")]),t._v("。若有需要可根据项目内的 Vue 版本进行配置修改。")])]),t._v(" "),a("h2",{attrs:{id:"辅助工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#辅助工具"}},[t._v("#")]),t._v(" 辅助工具")]),t._v(" "),a("h3",{attrs:{id:"提交前检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交前检查"}},[t._v("#")]),t._v(" 提交前检查")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/utils-lib/husky.html"}},[t._v("husky")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/utils-lib/lint-staged.html"}},[t._v("lint-staged")])],1)]),t._v(" "),a("h3",{attrs:{id:"编辑器插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑器插件"}},[t._v("#")]),t._v(" 编辑器插件")]),t._v(" "),a("p",[t._v("查看 "),a("RouterLink",{attrs:{to:"/utils-lib/vscode.html#eslint"}},[t._v("VsCode - ESLint")]),t._v(" 配置。")],1),t._v(" "),a("h2",{attrs:{id:"常用链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用链接"}},[t._v("#")]),t._v(" 常用链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://eslint.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint 官网"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://eslint.org/docs/rules",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint 官方规则"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/standard/eslint-config-standard",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-config-standard"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://eslint.vuejs.org/rules/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-vue"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/qxy-fe/configs",target:"_blank",rel:"noopener noreferrer"}},[t._v("@qxy 配置预设仓库"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);