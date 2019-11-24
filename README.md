# vue+koa2+webpack4+ssr+boostrap 响应式个人博客

1. 先要开启[后端服务](https://github.com/dirkhe1051931999/vue-management)
2. 再开启前端服务
3. 关于 vue+ssr+webpack4 的使用可以看我之前[总结的文章](https://github.com/dirkhe1051931999/hjBlog/blob/master/blog-vue/lessons/16.md)
4. 旧版本：[nuxt 版的博客](https://github.com/dirkhe1051931999/vue-myBlog)

## 执行

```bash

git clone https://github.com/dirkhe1051931999/vue-ssr-blog.git
npm install
npm run build
npm start
```

## 版本

`v1.1.0`

## 更新记录

1. 2019-03-16
   - github 授权认证
2. 2019-03-24
   - 评论功能
3. 2019-03-31
   - 评论功能防御了 xss 攻击，url 地址栏增加了字段的类型检测
   - 同时服务端表的查询使用了参数化查询，防止 sql 注入
4. 2019-11-24
   - vue+srr+koa2 手撸服务端渲染，重构个人博客

## 完成的功能

1. 文章列表，文章详情
2. 分类列表，分类详情
3. 标签列表，标签详情
4. 项目列表，项目详情

## 待完成的功能

1. ~~评论管理~~
2. ~~github 授权认证~~
3. 获取用户位置
4. ...

## 效果

**首页**

![home.png](https://i.loli.net/2019/11/24/SslaP4TvimNLUYo.png)
![home-m.png](https://i.loli.net/2019/11/24/x81kz9dhsBHbfqK.png)

**文章页**

![post.png](https://i.loli.net/2019/11/24/TtwagCmbszuxchH.png)
![post-m.png](https://i.loli.net/2019/11/24/QXfPDqJl7xVKiFd.png)

**归档页**

![archive.png](https://i.loli.net/2019/11/24/n1lWZUgErHRNyz6.png)
![archive-m.png](https://i.loli.net/2019/11/24/SL35dbTOD6FZzKc.png)

**项目页**

![item.png](https://i.loli.net/2019/11/24/MO29vANdznBDXjm.png)
![item-m.png](https://i.loli.net/2019/11/24/JcBVqMG2FyZIteS.png)

**关于页**

![about.png](https://i.loli.net/2019/11/24/WuvpFdfO7PGCbnq.png)
![about-m.png](https://i.loli.net/2019/11/24/MoZgqseJ6LCYDWE.png)

**标签页**

![tag.png](https://i.loli.net/2019/11/24/DxZ9By13VQnvRYw.png)
![tag-m.png](https://i.loli.net/2019/11/24/NzlcwW2omVjrndD.png)

## 项目结构

```tree
.
|-- README.md
|-- build
|   |-- dev.config.js  # 自动打包，每当改变vue文件的时候，自动build
|   |-- webpack.base.config.js # output、extensions、rules
|   |-- webpack.client.config.js # 打包客户端
|   `-- webpack.server.config.js # 打包服务端
|-- package.json
|-- postcss.config.js # autoprefixer
|-- server.js # koa服务器，是否缓存html
|-- src
|   |-- App.vue
|   |-- api # 接口
|   |   `-- index.js
|   |-- app.js  # 为每个请求创建一个新的根vue实列
|   |-- assets # 第三方文件
|   |   |-- fonts
|   |   |   |-- Galdeano-Regular.woff2
|   |   |   |-- SourceCodePro-Regular.woff2
|   |   |   |-- icomoon.eot
|   |   |   |-- icomoon.svg
|   |   |   |-- icomoon.ttf
|   |   |   `-- icomoon.woff
|   |   |-- images
|   |   |   |-- me.jpg
|   |   |   `-- wpay.jpg
|   |   |-- scripts
|   |   `-- styles
|   |       |-- bootstrap-vertical-menu.css
|   |       |-- bootstrap.min.css
|   |       |-- common.scss
|   |       |-- default.css
|   |       |-- font-awesome.min.css
|   |       `-- markdown.scss
|   |-- components # 组件
|   |   |-- postBowl # 文章详情
|   |   |   `-- index.vue
|   |   |-- posts # 文章
|   |   |   `-- index.vue
|   |   `-- svgIcon # svg组件
|   |       `-- index.vue
|   |-- entry-client.js # 挂载客户端应用程序
|   |-- entry-server.js # 挂载服务端应用程序
|   |-- icons # svg
|   |   |-- index.js
|   |   |-- svg
|   |   |   |-- about.svg
|   |   |   |-- blog.svg
|   |   |   |-- calendar.svg
|   |   |   |-- card.svg
|   |   |   |-- countdown.svg
|   |   |   |-- email.svg
|   |   |   |-- github.svg
|   |   |   |-- home.svg
|   |   |   |-- item.svg
|   |   |   |-- label.svg
|   |   |   |-- pencil.svg
|   |   |   |-- sort.svg
|   |   |   |-- time.svg
|   |   |   |-- types.svg
|   |   |   `-- weibo.svg
|   |   `-- svgo.yml
|   |-- index.template.html # 页面模板
|   |-- layout # layout
|   |   |-- components
|   |   |   `-- slidebar.vue
|   |   `-- index.vue
|   |-- mixins
|   |   |-- title-mixins.js
|   |   `-- utils.js
|   |-- router.js # 路由
|   |-- store # vuex
|   |   `-- index.js
|   |-- utils # 公共方法
|   |   |-- axios.js
|   |   `-- meta.js
|   `-- views
|       |-- about.vue # 关于页
|       |-- archive.vue # 归档文章页
|       |-- index.vue # 首页
|       |-- item.vue # 项目页
|       |-- post.vue # 详情页
|       `-- types.vue # 归档分类页
`-- static # 静态资源服务器
    |-- favicon.ico
    `-- text.txt
```
