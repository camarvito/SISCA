import Vue from 'vue'
import App from './App.vue'
import './plugins/graphql'
import router from './router'
import store from './store'

import VueTheMask from 'vue-the-mask'

// Vue.use(SvgSprite)
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
