# Git

## 配置

在用户目录下放置以下配置文件:

**`.gitconfig`**

```sh
[user]
  name = your_name
  email = your_email@gmail.com

[core]
  editor = vim
  whitespace = fix,-indent-width-non-tab,trailing-space,cr-at-eol
  excludesfile = ~/.gitignore_global # 全局忽略文件
  quotepath = false # 修复中文路径乱码
  ignorecase = false # 大小写敏感

[color]
  ui = auto
```

**`.gitignore_global`**

```sh
# NPM
node_modules

# OSX
.DS_Store
__MACOSX

# TODO files
TODO*.md
todo*.md

# Test Coverage
coverage

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env
.env.local
.env.*.local

# vim
*.swp
*.swo
*.so
```
