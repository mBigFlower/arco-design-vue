```yaml
meta:
  type: 组件
  category: 数据展示
title: 头像 Avatar
description: 用作头像显示，可以为图片、图标或字符形式展示。
```

@import ./__demo__/basic.md

@import ./__demo__/size.md

@import ./__demo__/group.md

@import ./__demo__/icon.md

@import ./__demo__/fit.md


### `<avatar>` Props

|参数名|描述|类型|默认值|
|---|---|---|:---:|
|shape|头像的形状，有圆形(circle)和正方形(square)两种|`'circle' \| 'square'`|`'circle'`|
|size|头像的尺寸大小，单位是 `px`|`number`|`40`|
|auto-fix-font-size|是否自动根据头像尺寸调整字体大小|`boolean`|`true`|
|trigger-icon-style|交互图标的样式|`CSSProperties`|`-`|
|trigger-type|可点击的头像交互类型|`'mask' \| 'button'`|`'button'`|
### `<avatar>` Events

|事件名|描述|参数|
|---|---|---|
|click|点击回调|event: `Event`event|
### `<avatar>` Slots

|插槽名|描述|参数|
|---|:---:|---|
|trigger-icon|可点击的头像交互图标|-|




### `<avatar-group>` Props

|参数名|描述|类型|默认值|
|---|---|---|:---:|
|shape|头像的形状，有圆形(circle)和正方形(square)两种|`'circle' \| 'square'`|`'circle'`|
|size|头像的尺寸大小，单位是 `px`|`number`|`40`|
|auto-fix-font-size|是否自动根据头像尺寸调整字体大小|`boolean`|`true`|
|max-count|头像组最多显示的头像数量，多余头像将以 `+x` 的形式展示。|`number`|`-`|
|z-index-ascend|头像组内的头像 `z-index` 递增，默认是递减。|`boolean`|`false`|

