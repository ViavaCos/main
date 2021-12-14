import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./config/index" // 注册子应用
import store from './store'

Vue.config.productionTip = false

const instance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(10010, 'Main - Vue', instance);
console.log(10011, 'Main - Store', store);