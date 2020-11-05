# VsCode

保持你是要的 VsCode 编辑器为最新版本。

## ESLint

安装插件 [dbaeumer.vscode-eslint](https://github.com/Microsoft/vscode-eslint)。

默认情况下，ESLint 并不属于 VsCode 的 **Formatter**。 Lint 的文件类型内右击 `Format document *`，其中提供的 **Formatter** 不包括 ESLint。ESLint 对代码的检查和自动修复能力属于 **CodeAction** 的范围。

通过 `eslint.format.enable` 配置可以将 ESLint 设置成 **Formatter**

### 配置

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
