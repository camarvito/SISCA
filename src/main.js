import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import App from './App.vue';
import './plugins/graphql';
import router from './router';
import store from './store';
import { toMoney } from './filters/format';

// Vue.use(SvgSprite)
Vue.use(VueTheMask);

Vue.filter('toMoney', toMoney);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
