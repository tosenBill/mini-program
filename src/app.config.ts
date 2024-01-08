export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/test/index',
  ],
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#1296db',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: './assets/icon/home-icon.png',
        selectedIconPath: './assets/icon/home-icon-selected.png',
        text: '首页',
      },
      {
        pagePath: 'pages/my/index',
        iconPath: './assets/icon/my-icon.png',
        selectedIconPath: './assets/icon/my-icon-selected.png',
        text: '我的',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
