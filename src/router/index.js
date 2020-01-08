import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchContainer from '../components/table-client/SearchContainer'
import CadastrarUsuario from '../components/register-client/CadastrarUsuario'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: SearchContainer
  },{
    path: '/cadastrar-usuario',
    name: 'registryUser',
    component: CadastrarUsuario
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
