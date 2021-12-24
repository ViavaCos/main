import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./config/index" // 注册子应用
import store from './store'

Vue.config.productionTip = false
window.Vue.prototype.$test = { name: 'Main' }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
