import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'

import VueTheMask from 'vue-the-mask'

Vue.prototype.$axios = axios

const firebaseConfig = {
  apiKey: "AIzaSyBJbzaIUWCvx66HAJ8FqfWFbP_5QgzHhFY",
  authDomain: "sisca-e7712.firebaseapp.com",
  databaseURL: "https://sisca-e7712.firebaseio.com",
  projectId: "sisca-e7712",
  storageBucket: "sisca-e7712.appspot.com",
  messagingSenderId: "1016969485671",
  appId: "1:1016969485671:web:45054b67e75765deeae3c2",
  measurementId: "G-4VPTH9JYWZ"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Vue.use(SvgSprite)
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
