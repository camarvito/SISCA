import Vue from 'vue';
import Vuex from 'vuex';

import costumers from './modules/costumers';
import costumerDebits from './modules/costumerDebits';
import sidebar from './modules/sidebar';
import alert from './modules/alert';
// import contentHeader from './modules/contentHeader';
import tableDebits from './modules/tableDebits';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Buscar cliente',
    clear: false,
    goBack: true,
  },
  mutations: {},
  actions: {},
  modules: {
    costumers,
    costumerDebits,
    sidebar,
    // contentHeader,
    tableDebits,
    alert,
  },
});
