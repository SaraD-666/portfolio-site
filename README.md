# zy-portofolio

- [项目简介](#项目简介)
- [项目结构](#项目结构)
- [主要功能](#主要功能)
- [技术栈](#技术栈)
- [安装与运行](#安装与运行)
- [页面说明](#页面说明)
- [依赖列表](#依赖列表)


## 项目简介
`zy-portofolio` 是一个基于 Vue 3 的个人作品集网站，展示了个人信息、简历、项目作品、当前研究以及联系方式等内容。项目使用了现代前端技术栈，包括 Vue 3、Vue Router、Tailwind CSS 和 Animate.css，提供了动态页面切换、动画效果和响应式设计。


## 项目结构
``` bash
zy-portofolio/
├── node_modules/          # 项目依赖
├── public/                # 静态资源
│   ├── favicon.ico
│   ├── favicons.ico
│   ├── files/
│   │   └── Modern_Simple_ATS_Friendly_LateX_CV.pdf
│   └── img/
│       ├── image.jpg
│       ├── portfolio-1.png
│       └── portfolio-2.png
├── src/                   # 源代码
│   ├── assets/            # 静态资源（CSS、图片等）
│   │   ├── logo.png
│   │   ├── tailwind.css
│   │   └── css/
│   │       └── style.css
│   ├── router/            # 路由配置
│   │   └── index.js
│   ├── views/             # 页面组件
│   │   ├── AboutView.vue
│   │   ├── ContactView.vue
│   │   ├── CurrentView.vue
│   │   ├── HomeView.vue
│   │   ├── IndexView.vue
│   │   ├── PortfolioView.vue
│   │   ├── ProfileView.vue
│   │   └── ResumeView.vue
│   ├── App.vue            # 根组件
│   ├── main.js            # 项目入口文件
│   └── index.html         # HTML 模板
├── .gitignore             # Git 忽略文件
├── babel.config.js        # Babel 配置
├── jsconfig.json          # JavaScript 配置
├── LICENSE                # 开源许可证
├── package.json           # 项目依赖和脚本
├── package-lock.json      # 锁定依赖版本
├── postcss.config.js      # PostCSS 配置
├── README.md              # 项目说明文档
├── tailwind.config.js     # Tailwind CSS 配置
└── vue.config.js          # Vue CLI 配置
```

## 主要功能

### 动态页面切换
使用 Vue Router 实现页面路由。
支持鼠标滚轮、触摸滑动和按钮点击切换页面。
动画效果通过 transition 和 Animate.css 实现。

### 页面内容
HomeView.vue：个人主页，展示个人简介和动态打字效果。
AboutView.vue：关于页面，展示个人技能和经验。
PortfolioView.vue：作品集页面，展示个人项目。
CurrentView.vue：当前研究页面，展示正在进行的研究项目。
ResumeView.vue：简历页面，嵌入 PDF 简历。
ContactView.vue：联系方式页面，展示社交媒体链接和邮箱。
ProfileView.vue：个人档案页面，展示更多个人信息。

### 动画效果
页面切换动画：zoomInDown 和 zoomOutUp。
元素动画：fadeInLeft、fadeInRight、fadeInUp 等。

### 响应式设计
使用 Tailwind CSS 提供响应式布局，适配不同屏幕尺寸。

### 静态资源
图片资源存放在 img 文件夹。
简历 PDF 文件存放在 files 文件夹。

## 技术栈

### 前端框架
Vue 3：用于构建用户界面。
Vue Router：用于管理页面路由。

### 样式
Tailwind CSS：用于快速构建响应式布局。
Animate.css：用于实现动画效果。

### 工具
Babel：用于编译现代 JavaScript。
PostCSS：用于处理 CSS。
ESLint：用于代码质量检查

## 安装与运行

安装依赖：`npm install`
运行项目：`npm run serve`
构建环境: `npm run build`
代码检查与修复：`npm run lint`

## 页面说明

### HomeView.vue
动态打字效果，展示个人简介。
按钮链接到简历和博客。

### AboutView.vue
展示个人技能和经验。
使用动画效果 fadeInLeft 和 fadeInRight。

### PortfolioView.vue
展示个人项目，包含项目名称、描述和链接。
使用网格布局和悬停动画。

### CurrentView.vue
展示当前研究项目，类似于作品集页面。

### ResumeView.vue
嵌入 PDF 简历，使用 <iframe> 显示。

### ContactView.vue
展示社交媒体链接和邮箱。

### ProfileView.vue
展示更多个人信息，使用动画效果。

## 依赖列表

### 核心依赖
vue：Vue 3 框架。
vue-router：路由管理。
animate.css：动画库。
axios：HTTP 请求库。

### 开发依赖
@vue/cli-service：Vue CLI 服务。
eslint：代码质量检查。
tailwindcss：CSS 框架。


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
<iframe style="width: 100%;" src="/files/Modern_Simple_ATS_Friendly_LateX_CV.pdf"></iframe>