# Nuxt--VueJS通用应用框架


## 运行说明

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## 特性

* 自动生成路由文件
* 支持前后端同构（SSR)
* 支持中间件，用于运行过程中处理定制业务
* 插件机制，可引入第三方包
* 内置vue全家桶，简化webpack配置
* 内置ant-design-vue组件库，ant-design的vue版实现

## 目录说明

```
++ nuxt.config.js  nuxt设置文件
++ src
 - pages   页面

 - assets  静态资源目录

 - components  公用组件

 - layouts  模板组件

 - middleware  中间件

 - plugins  插件

 - static  存放应用的静态文件

 - store  状态管理

 - utils  存放自定义插件或项目所需文件

```

## TODO List

- [ ] axios封装（请求拦截，状态码处理）

- [x] 多标签页
- [x] 路由切换动画
- [ ] 页面标签缓存
- [ ] 页面示例组件展示

## 一些坑
* 引入ant-design-vue之后，大概率会因为autoprefixer无法解析报错，需要手动改写依赖包里的less文件
  
```
In /spin/style/index.less, replace it with below codes.

/* autoprefixer: off */ filter: ~"progid:DXImageTransform.Microsoft.Blur(PixelRadius=1, MakeShadow=false)";

```

## 相关链接

[nuxtJs官网](https://zh.nuxtjs.org/)
