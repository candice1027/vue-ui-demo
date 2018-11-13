# 一个vue UI 组件

[![Build Status](https://travis-ci.org/candice1027/vue-ui-demo.svg?branch=master)](https://travis-ci.org/candice1027/vue-ui-demo)

## 介绍
这是我在学习vue过程中做的一个ui框架
## 开始使用

1. 添加

    使用本框架前，请在css中开启border-box

    ```
    *,*::before,*::after{box-sizing: border-box}
    ```
    IE8及以上浏览器都支持此样式
    你还需要设置默认颜色等变量（后续会改为scss变量）
    ```
    html {
            --button-height: 32px;
            --font-size: 14px;
            --color: #333;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --border-color: #999;
            --border-color-hover: #666;
        }
    ```
    IE15及以上支持此样式
2.安装
```
npm i --save vui
```
3. 引入

```
import {Button} from 'lvsuzhen-vue-gulu-test'
import 'lvsuzhen-vue-gulu-test/dist/index.css'
export default {
    name: 'app',
    components: {
        'g-button': Button
    }
}
```


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

## 作者： lvsz

