import Vue from 'vue'
import App from './App'

// Vue.config.productionTip = false
// App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      // 'pages/logs/main', 
      // 'pages/index/main',
      '^pages/charge/main',
      'pages/account/main',
      'pages/financial/main',
      'pages/find/main',
      'pages/my/main',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ff6044',
      navigationBarTitleText: '挖财记账',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: "#929292",
      selectedColor: "#ff6044",
      backgroundColor: "#f6f6f6",
      borderStyle: "#cfcfcf",
      list: [
        {
          pagePath: "pages/charge/main",
          iconPath: "static/images/charge.png",
          selectedIconPath: "static/images/charge-selected.png",
          color:"white",
          text: "记账"
        },
        {
          pagePath: "pages/account/main",
          iconPath: "static/images/account.png",
          selectedIconPath: "static/images/account-selected.png",
          text: "账户"
        },
        {
          pagePath: "pages/financial/main",
          iconPath: "static/images/financial.png",
          selectedIconPath: "static/images/financial-selected.png",
          text: "理财"
        },
        {
          pagePath: "pages/find/main",
          iconPath: "static/images/find.png",
          selectedIconPath: "static/images/find-selected.png",
          text: "发现"
        },
        {
          pagePath: "pages/my/main",
          iconPath: "static/images/my.png",
          selectedIconPath: "static/images/my-selected.png",
          text: "我的"
        }
      ]
    }
  }
}
