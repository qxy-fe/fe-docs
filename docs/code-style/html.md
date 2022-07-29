# HTML

## 文档类型声明 <badge>强制</badge>

HTML 文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明。

```html
<!DOCTYPE html>
```

## 页面语言 <badge>强制</badge>

考虑浏览器和操作系统的兼容性，使用 `zh-CN` 属性值。

```html
<html lang="zh-CN"></html>
```

- [网页头部的声明应该是用 lang="zh" 还是 lang="zh-cn"？](https://www.zhihu.com/question/20797118)

## 字符编码 <badge>强制</badge>

一般情况下统一使用 `UTF-8` 编码，若有业务需求可能会使用 `GBK`。

请尽量写成标准的 `UTF-8`，不要写成 `utf-8`、`utf8` 或 `UTF8`。

```html
<meta charset="UTF-8" />
```

## 渲染模式 <badge>强制</badge>

针对国内浏览器环境设置 IE 兼容模式和极速渲染模式。

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="renderer" content="webkit" />
```

## favicon <badge>强制</badge>

保证 **favicon** 可访问。

在未指定 favicon 时，大多数浏览器会请求 Web Server 根目录下的 favicon.ico 。

为了保证 favicon 可访问，避免 404，必须遵循以下两种方法之一：

- 在 Web Server 根目录放置 favicon.ico 文件。
- 使用 link 指定 favicon。

```html
<link rel="shortcut icon" href="path/to/favicon.ico" />
<!-- OR -->
<link rel="icon" type="image/x-icon" href="path/to/favicon.ico" />
```

## 样式脚本引用 <badge>强制</badge>

HTML5 规范中，不需要为 CSS 和 JavaScript 指定 `type` 属性，因为 `text/css` 和 `text/javascript` 是它们的默认值。

```html
<!-- 外部 CSS -->
<link rel="stylesheet" href="your.css" />
<!-- 页面 CSS -->
<style>
  /* ... */
</style>

<!-- 外部 js -->
<script src="your.js"></script>
<!-- 页面 js -->
<script>
  // ...
</script>
```

## 标签属性 <badge>强制</badge>

- 标签名、类名、标签属性和大部分属性值统一使用小写
- 元素属性值必须使用双引号进行包裹
- 布尔型属性可以在声明时不赋值
- 自闭合标签需要加上尾部的 `/`

```html
<input type="text" disabled readonly />

<input type="checkbox" value="1" checked />

<img src="logo.jpg" alt="logo" />
```

### id 与 class <badge>强制</badge>

1. id 与 class 属性值统一使用小写
2. class 多个单词间以 `-` 字符分隔。
3. id 多个单词间以 `_` 字符分隔。
4. class 必须语义化表示模块或者模块的功能或内容，不以样式信息命名。
5. id 必须保持页面唯一。
6. 在避免冲突和描述清楚的前提下尽可能缩写，但禁止非常用且语意不明确的缩写。

::: warning
三方库或者插件受源码限制，可不遵循大小写规范。
:::

### 属性顺序 <badge type="warning">建议</badge>

按使用频率来排列。

- class
- id, name
- data-\*
- type, src, href, value, for
- title, alt
- role, aria-\*
- ...

### 自定义属性 <badge>强制</badge>

自定义属性建议使用 HTML 规范的 Data API，命名格式为 `data-*`。

```html
<body data-mode="portrait" data-theme="vue"></body>
```

## 链接 <badge type="warning">建议</badge>

当链接指向站点的外部链接时，为其添加 `rel` 属性。

常用属性值如下，可选属性值参考 [MDN - 链接类型](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types)。

```html
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  Go to Google
</a>
```

## 图片 <badge>强制</badge>

- 禁止图片的 `src` 属性值为空，懒加载图片需要提供默认的 `src`
- 禁止为图片添加 `title` 属性
- 建议为图片添加 `alt` 属性，提升加载失败时的用户体验。
- 有下载需求的图片使用 `img` 标签实现，无需求的使用背景图实现。

::: tip

1. 产品 LOGO、用户图像，二维码，动态内容图片等有潜在下载需求的图片，用 `img` 标签实现，方便用户下载。

2. icon，背景，修饰性元素等无明显下载需求的图片，使用背景图来实现。
   :::

## 表单 <badge>强制</badge>

- 存在文本标题的控件使用 `label` 标签将它与标题相关联。

  - 将控件放置于 `label` 标签内。
  - `label` 的 `for` 属性指向表单控件的 `id` 属性。

- button 标签必须明确设置 `type` 属性。因为不同的浏览器默认类型不一致。
- button 标签或者 `<input type="button" />` 按钮，禁止设置 `name` 属性值。

```html
<!-- good -->

<label for="username">用户名：</label>
<input type="text" name="username" id="username" />

<!-- better -->
<label>
  <input type="checkbox" name="confirm" checked="checked" />
  <span>我已确认上述条款</span>
</label>
```

## 表格 <badge type="warning">建议</badge>

在可以用样式实现情况下，禁止使用 `table` 标签进行布局。

但是在展示明确的表格数据时，表格仍然时首选。

## 实体字符 <badge>强制</badge>

以实体代替与 HTML 语法相同的字符，避免解析错误。

| 字符 |  名称  |   实体    |
| :--: | :----: | :-------: |
|  “   |  引号  | `&quote;` |
|  &   |   与   |  `&amp;`  |
|  <   |  小于  |  `&lt;`   |
|  >   |  大于  |  `&gt;`   |
|  ©   |  版权  | `&copy;`  |
|      |  空格  | `&nbsp;`  |
|  ¥   | 人民币 |  `&yen;`  |

## 标签嵌套 <badge type="warning">建议</badge>

1. 块元素与内联元素，必须独立一行。
2. 块元素内任何内容，都必须换行缩进一次。
3. 行内元素直接内容为文本时，无需换行。

```html
<div>
  <h1>Lorem ipsum</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laboriosam
    suscipit cumque debitis laborum ipsum aliquam earum quae itaque eaque!
  </p>
</div>
<p>
  <span>Lorem ipsum</span>
  <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </span>
</p>
```

## 模板语言 <badge type="warning">建议</badge>

比如 **Smarty**。

### HTML 缩进优先

```html
<!-- good -->
{if $display == true}
<div>
  <ul>
    {foreach $item_list as $item}
    <li>{$item.name}</li>
    <li>{/foreach}</li>
  </ul>
</div>
{/if}

<!-- bad -->
{if $display == true}
<div>
  <ul>
    {foreach $item_list as $item}
    <li>{$item.name}</li>
    <li>{/foreach}</li>
  </ul>
</div>
{/if}
```

### HTML 正确优先

```html
<!-- good -->
<li class="{if $item.type_id == $current_type}focus{/if}">{ $item.type_name }</li>

<!-- bad -->
<li {if $item.type_id eq $current_type} class="focus"{/if}>{ $item.type_name }</li>
```

## 参考文档

- [Code Guide - HTML Syntax](https://codeguide.co/#html-syntax)
- [凹凸实验室代码规范 - HTML 规范](https://guide.aotu.io/docs/html/code.html)
- [黄羊郑州前端规范与开发文档](https://hyfe.github.io/Guide)
