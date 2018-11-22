## node demo 说明
---

#### 前期环境搭建

node

```
官网下载最新稳定版

node -v 
查看版本

```
              
express

```
yarn add express

```

mongoDB
```
官网下载最新版本

启动步骤：

进入到安装目录下

输入命令：

mongod --dbpath ‘输入你的数据库路径’

出现一大坨代码，并且没有自动exit，说明启动成功

```

mongoose

```
yarn add mongoose

```


#### 目录

+ 前端目录

```

+ front
  + src
    + assets    // 静态资源
    + components  // 组件
    + layouts   // 布局文件
    + pages  // 页面
      - index.vue
    + plugins  // 插件
    + services // 服务
    + static // 第三方资源或插件
    + store  // 状态管理
    + utils  // 公用资源
  - nuxt.config.js 配置文件
  - package.json 

```

+ 后端目录

```
+ server
  + config
    - config.js  // 配置文件
  + db  // 数据库模块
  + middlewares // 中间件
  + models // 数据模型
  + routes // 路由api
  + index.js // 启动文件
  + package.json

```
#### 功能点

- [x] 登录
- [x] 注册
- [x] 帖子列表增删改查
- [x] 登出
- [ ] 图片上传
- [ ] 发表文章
- [ ] 主题标签分类
- [ ] 热门内容排序
- [ ] 站内信
- [ ] 消息提醒
- [ ] 个人资料设置
- [ ] 点赞
- [ ] 评论/回复
- [ ] 收藏功能
- [ ] 外部链接分享
- [ ] 用户权限控制

