# ESLint

> JavaScript 和 TypeScript 代码风格检查与自动修复工具。

## 原则

1. 提交至 Git 仓库的代码都应可通过 ESLint 检查且无错误。
2. 禁止以该条规则过于严格作为理由要求关闭该规则检查，但可提出配置不合理，要求修改规则配置。(配置会在合理的范围内越来越严格，帮助提升代码质量)
3. 禁止个人私自关闭项目 ESLint 配置的任何规则，但若有必要可在团队内发起评审后决定是否关闭。
4. 代码受规则影响无法提交时，可[通过注释关闭规则](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)，但应限制禁用规则作用范围尽可能小。
5. 使用注释禁用规则时，需在其上打上 `// FIXME: eslint` 注释, Vue 模板中为 `<!-- FIXME: eslint -->`，并尽快修复。
6. 优先使用命令行 `--fix` 参数或者编辑器插件修复所有 **可修复的** 问题，避免浪费时间。

## 团队规则

[@qxy/eslint-config](https://github.com/qxy-fe/configs/tree/master/packages/eslint/config)

> 基于 [eslint-config-standard](https://github.com/standard/eslint-config-standard) 进行订制。

> 增加了最大文件行数、嵌套层级、复杂度等利于代码维护的规则限制。

### 使用

#### 安装依赖

```sh
$ npm i @qxy/eslint-config -D
# OR
$ yarn add @qxy/eslint-config -D
```

#### 继承配置

使用 `.eslintrc.js` 文件:

```js
module.exports = {
  root: true,

  extends: ['@qxy'],

  rules: {
    // Override rules
  },
}
```

或

`package.json` 中配置:

```json
{
  "eslintConfig": {
    "root": true,
    "extends": "@qxy"
  }
}
```

[@qxy/eslint-config-vue](https://github.com/qxy-fe/configs/tree/master/packages/eslint/vue)

> 基于 [eslint-plugin-vue:recommended](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/recommended.js) 预设(最严格)进行配置

> 增加了所有未列入默认预设的规则，并对其进行了适当的配置。

### 使用

#### 安装依赖

```sh
$ npm i @qxy/eslint-config-vue babel-eslint -D
# OR
$ yarn add @qxy/eslint-config-vue babel-eslint -D
```

#### 继承配置

使用 `.eslintrc.js` 文件:

```js
module.exports = {
  root: true,

  extends: ['@qxy/vue'],

  rules: {
    // Override rules
  },
}
```

或

`package.json` 中配置:

```json
{
  "eslintConfig": {
    "root": true,
    "extends": "@qxy/vue"
  }
}
```

::: warning
规则 [vue/no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html) 内配置了默认 Vue 版本为 `^2.6.0`。若有需要可根据项目内的 Vue 版本进行配置修改。
:::

## 辅助工具

### 提交前检查

- [husky](/utils-lib/husky.html)
- [lint-staged](/utils-lib/lint-staged.html)

### 编辑器插件

查看 [VsCode - ESLint](/utils-lib/vscode.html#eslint) 配置。

## 常用链接

- [ESLint 官网](https://eslint.org)
- [ESLint 官方规则](https://eslint.org/docs/rules)
- [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [eslint-plugin-vue](https://eslint.vuejs.org/rules/)
- [@qxy 配置预设仓库](https://github.com/qxy-fe/configs)
