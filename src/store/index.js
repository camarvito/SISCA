import Vue from 'vue'
import Vuex from 'vuex'

import sidebar from './modules/sidebar'
import contentHeader from './modules/contentHeader'
import tableDebits from './modules/tableDebits'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { sidebar, contentHeader, tableDebits }
})
