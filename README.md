<div align="center">
	<img src="src/assets/icon/taro-icon.jpg" alt="logo_melomini" style="width:20%;" />
</div>

<!-- <div align="center">
	<a href="https://github.com/yulimchen/vue3-h5-template/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/yulimchen/vue3-h5-template.svg?style=flat-square" alt="license">
  </a>
  <a href="https://github.com/yulimchen/vue3-h5-template/releases">
    <img src="https://img.shields.io/github/release/yulimchen/vue3-h5-template.svg?style=flat-square" alt="GitHub release">
  </a>
  <a href="https://github.com/yulimchen/vue3-h5-template">
    <img src="https://img.shields.io/github/stars/yulimchen/vue3-h5-template?style=flat-square" alt="GitHub stars">
  </a>
  <a href="https://github.com/yulimchen/vue3-h5-template">
    <img src="https://img.shields.io/github/forks/yulimchen/vue3-h5-template?style=flat-square" alt="GitHub forks">
  </a>
</div> -->

<h1 align="center">Taro Vue3 typescript</h1>

**🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的移动端项目基础模板**

- [x] ⚡ Taro + Vue3
- [x] 🍕 TypeScript
- [x] ✨ Nutui 组件库
- [x] 🌀 TODO: Tailwindcss 原子类框架
- [x] 🍍 Pinia 状态管理
- [x] Axios 封装
- [x] ESLint
- [x] 开发环境调试面板
- [ ] TODO: 生产环境 CDN 依赖

👓 [点击这里](https://github.com/tosenBill/mini-program/)（PC 浏览器请切换手机端模式）

## 项目版本

注意：要求 Node 版本 16+，可使用 [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) 进行本地 Node 版本管理，同时建议使用 [pnpm](https://pnpm.io/zh/installation) 包管理器。

```
@tarojs/cli@3.6.22 | MIT | deps: 21 | versions: 689
cli tool for taro
https://github.com/NervJS/taro#readme
```

## 克隆项目

```
git clone https://github.com/tosenBill/mini-program
```

## 主要分支说明

| 分支                  | 描述                 |
| :-------------------- | :------------------- |
| @tarojs/cli-init-vue3 | 项目所需要的基础依赖 |
| main                  | 最新代码             |
| live                  | 线上环境             |

```
## 进入项目目录

cd mini-program

## 安装依赖

pnpm install

## 启动服务

pnpm dev:weapp
```

## 相关文档

> - [Taro 官方文档](#taro)
> - [Nutui 官方文档](#nutui)
> - [Eslint 配置](#eslint)
> - [Tailwindcss 原子类框架](#tailwindcss)

### - <span id="taro">Taro 官方文档</span>

https://taro.redwoodjs.cn/docs/README

### - <span id="nutui">Nutui 官方文档</span>

https://nutui.jd.com/#/

### - <span id="eslint">Eslint + Prettierrc 使用</span>

#### 1. 安装：

```
pnpm i eslint@7 prettier@2 eslint-config-taro-vue3-ts -D
```

#### 2. 配置 `.eslintrc.js` 文件：

```
module.exports = {
  'extends': ['taro-vue3-ts']
}
```

https://www.npmjs.com/package/eslint-config-taro-vue3-ts

#### 3. 相关描述 [文章](https://blog.csdn.net/weixin_43664308/article/details/128717523)

### - <span id="tailwindcss">Tailwindcss 原子类框架</span>

Tailwindcss 从 3.0 版本开始默认使用 `JIT` 模式，打包代码不再臃肿~ 如果你还没使用过类似的框架，Tailwindcss 首页的[示例](https://tailwindcss.com/)非常直观。

官方文档：https://tailwindcss.com/docs/padding

## License

[MIT license](https://github.com/tosenBill/mini-program/blob/master/LICENSE).

## QA

### 遇到的问题

1. [taro 3.0 + Vue 中 scoped 在 h5 下生效，在微信小程序中无效 #6662](https://github.com/NervJS/taro/issues/6662)
