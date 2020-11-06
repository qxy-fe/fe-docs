# VSCode

保持你安装的 VSCode 编辑器为最新版本。

## 代码风格

### ESLint

安装插件 [dbaeumer.vscode-eslint](https://github.com/Microsoft/vscode-eslint)。

默认情况下，ESLint 并不属于 VSCode 的 **Formatter**。 Lint 的文件类型内右击 `Format document *`，其中提供的 **Formatter** 不包括 ESLint。ESLint 对代码的检查和自动修复能力属于 **CodeAction** 的范围。

通过 `eslint.format.enable` 配置可以将 ESLint 设置成 **Formatter**

#### 相关配置

```json
{
  // 默认 javascript + javascriptreact
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "vue-html"
  ],
  // 是否在修复问题菜单上显示规则链接，默认显示
  "eslint.codeAction.showDocumentation": {
    "enable": false
  },
  // 自动修复 ESLint 可修复问题，打开其一即可
  "editor.codeActionsOnSave": {
    // 同时修复其他 CodeAction
    "source.fixAll": true,
    // 仅修复 eslint 问题
    "source.eslint.fixAll": true
  }
}
```

## 代码片段

使用可复用的代码片段可以有效地提升工作效率，同时避免简单模块复制粘贴带来的错误。

VSCode 支持以下的形式来定义和使用代码片段。

- 包含 Code Snippets 的 VSCode 扩展。
- `Code - Preference - User snippets` 生成用户层级的 Code Snippets。
- 项目 `.vscode/*.code-snippets` 文件添加项目自定义 Code Snippets

这里主要针对第二种进行介绍。

其核心是使用 VSCode 支持的语法编写 `*.code-snippets` 文件，并置于 `.vscode` 目录下。

`*.code-snippets` 文件语法同 `json`。 以下为一个简单的示例：

```json
{
  "log to console": {
    // 触发器
    "prefix": "log",
    // 作用于
    "scope": "javascript",
    // snippets 内容 1为占位 冒号后为默认值
    "body": ["console.log(${1:'hello world'})"],
    // 描述
    "description": "log to console"
  }
}
```

强烈推荐 [Snippets-Generator](https://snippet-generator.app) 粘贴代码片段，即可简单生成 Code Snippets。

### 相关配置

```json
{
  // Snippets 和其他建议的排序方式 top表示优先snippets
  "editor.snippetSuggestions": "top"
}
```

## 常用链接

- [Snippets-Generator](https://snippet-generator.app)
