# jQuery

## 版本选择

- **v1.x** 兼容 IE6
- **v2.x** 不兼容 IE8
- **v3.x** 不兼容 IE8

## 代码风格

代码风格继承 [JavaScript](/code-style/javascript) 风格。

## jQuery 变量 <badge>强制</badge>

所有使用或者缓存 jQuery 对象的变量应该以 `$` 开头，以方便与 js 变量进行区分。

```js
var $foo = $('#foo')
```

## 选择器性能优化 <badge type="warning">建议</badge>

DOM 操作需要遍历 DOM 树，非常消耗性能，应该尽可能地去优化。

### 选择 ID

选择 ID 时，内部会使用 `document.getElementById()` 来实现。

### 选择确定 ID 下的类

```js
// bad 整体使用 Sizzle 查找
$('#list .item')

// good 在 #list 范围内使用 Sizzle 查找
$('#list').find('.item')
```

### 指定上下文选择

```js
// bad
$('.class')

// good
$('.class', '#class-container')
```

### 选择所有子元素

```js
// bad
$('#list > *')

// good
$('#list').children()
```

### 隐式通配符选择

```js
// bad
$('#form').find(':checked')

// good
$('#form').find('input:checked')
```

### ID 选择器无需嵌套

```js
// bad
$('#outer #inner')

// bad
$('div#inner')

// bad
$('.out-container #inner')

// good
$('#inner')
```

## 链式写法 <badge type="warning">建议</badge>

尽量使用链式写法，而不是多次调用选择 DOM 进行操作。

```js
$('#tab .list-item').addClass('is-active').siblings().removeClass('is-active')
```

## 更新 DOM <badge>强制</badge>

原则: 最小化现场更新。

```js
var namelist = ['foo', 'bar', 'baz']
var $list = $('#list')

// bad
$list.empty()

for (var i = 0; i < nameList.length; i++) {
  var listItem = '<li>' + nameList[i] + '</li>'

  $list.append(listItem)
}

// good
var html = ''

$.each(nameList, function (idx, name) {
  html += '<li>' + name + '</li>'
})

$list.html(html)

// better
var html = $.map(nameList, function (name) {
  return '<li>' + name + '</li>'
}).join('')

$list.html(html)
```

## 样式修改 <badge>强制</badge>

### 静态修改

通过切换类来实现样式的静态修改。

```js
$('#nav').find('.nav-item').addClass('is-active')
```

### 动态修改

动态样式修改可使用 `css` 方法，仍以最小化现场更新为原则，避免页面多次渲染。

```js
$('#box').css({
  width: '200px',
  height: '200px',
  backgroudColor: '#f00',
})
```

## 事件绑定 <badge>强制</badge>

### DOM Ready

每个页面只使用一个 Document Ready 函数，利于调试。

```js
/**
 * DOM Ready
 */
$(function () {
  // initPage
})
```

### HTML 标签事件绑定

禁止在 HTML 上绑定事件，这违背了 `表现 - 样式 - 行为` 分离原则。

此种方式绑定的事件也不方便进行解绑。

### 事件命名空间

若需要在某 DOM 元素上绑定特定的事件且有移除事件的需要。建议在绑定此事件的时候添加自定义的命名空间，方便移除时不会影响此 DOM 上的其他事件。

```js
$('#list_wrap').on('scroll.myScrollEvent', myScrollEventHandler)

$('#list_wrap').off('scroll.myScrollEvent')
```

## Ajax <badge>强制</badge>

### 只使用 \$.ajax 方法

避免使用 `$.getJson()` 和 `$.get()` 等实例方法，只使用 `$.ajax()` 方法进行数据请求。

前两者为后者的封装。

### query 参数

请求 query 参数放到 data 里，而不是 url 上，代码有更好的可读性。

```js
// bad
$.ajax({
  url: 'something.php?param1=test1&param2=test2',
})

// good
$.ajax({
  url: 'something.php',
  data: {
    param1: 'test1',
    param2: 'test2',
  },
})
```

### 数据类型 dataType

明确设置数据的类型 dataType，这样很容易知道当前正在处理什么样的数据。

现在常用设置为 `json`。

### 省略默认值字段

- **type** 默认值为 `GET`
- **async** 默认值为 `true`

### 优先使用链式写法

```js
// not so good
$.ajax({
  url: 'api.php',
  success: function (res) {
    console.log(res)
  },
})

// good
var fetchData = $.ajax({ url: 'api.php' })

fetchData.done(function (res) {
  console.log(res)
})
```

### jQuery 静态方法

低版本浏览器内使用 jQuery 提供的静态工具方法，有不错的兼容性。

- `$.isPlainObject()` 判断对象是否为纯粹的对象 (通过 `{}` 或者 `new Object()` 创建)
- `$.isEmptyObject()` 判断传入值是否为空对象 `{}`
- `$.isArray()` 判断传入值是否为数组
- `$.isFunction()` 判断传入值是否为函数
- `$.extend()` 从右向左合并多个对象，并返回结果
- `$.map()` 迭代数组方法，返回新数组 数组项为回调函数第一个参数
- `$.each()` 迭代数组方法，无返回 数组项为回调函数第二个参数，第一个为当前项索引
- `$.trim()` 去除字符串两边空格
- `$.inArray()` 类似数组的 `indexOf` 方法
- `$.makeArray()` 将 `ArrayLike` 类型数据转换为数组。

常用的 `ArrayLike` 数据:

- 字符串
- 函数参数对象 `arguments`
- DOM 选择器集合，`getElementsByClassName` 或 `getElementsByTagName` 结果。
- jQuery 对象集合。

## 插件选择 <badge type="warning">建议</badge>

- 始终选择有良好维护、优秀文档、良好测试和社区支持的插件。
- 明确插件的 jQuery 版本兼容性和浏览器版本兼容性。
- 可根据需求，封装日常常用模块为插件。

## 扩展阅读

- [jQuery 代码规范与最佳实践](https://www.runoob.com/w3cnote/jquery-style-guide-html.html)
