import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./config/index" // 注册子应用

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
