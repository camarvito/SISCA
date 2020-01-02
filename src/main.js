import Vue from 'vue'
import SvgSprite from 'vue-svg-sprite'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.use(SvgSprite)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
