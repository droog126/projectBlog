### 目标:精简能力，操控细节

#### 进度

公共能力 + npm 发布

配置 dev 提高开发体验

上 gitlab

react 路由懒加载 和 路由错误处理

数据流

axios 拦截

[WIP]代理

[WIP]git 自动化编译 + 发布

[WIP]埋点+看板

## 开发:

#### 任意目录:

1. yarn install

#### 根目录:

2. yarn dev

## 构建

1. 去 common 下更新版本号
2. 根目录下 yarn build

#### 好记性不如烂笔头

lerna add @ecom/nt-common --scope=preview

lerna clean 还要删除 lockal

lerna add @ecom/nt-common

yarn cache clean
