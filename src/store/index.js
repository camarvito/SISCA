import Vue from 'vue';
import Vuex from 'vuex';

import costumers from './modules/costumers';
import costumerDebits from './modules/costumerDebits';
import sidebar from './modules/sidebar';
// import contentHeader from './modules/contentHeader';
import tableDebits from './modules/tableDebits';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Buscar cliente',
    clear: false,
    return: true,
  },
  mutations: {
    changeContentHeader(state, payload) {
      (state.title = payload.title),
        (state.clear = payload.loadClear),
        (state.return = payload.loadReturn);
    },
  },
  actions: {},
  modules: {
    costumers,
    costumerDebits,
    sidebar,
    // contentHeader,
    tableDebits,
  },
});
