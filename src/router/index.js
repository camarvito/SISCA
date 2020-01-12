import Vue from 'vue'
import VueRouter from 'vue-router'
import TableClients from '../components/table-client/TableClients'
import CadastrarUsuario from '../components/register-client/RegisterCostumerForm'
import User from '../components/table-client/User'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    component: TableClients
  },{
    path: '/cadastrar-usuario',
    component: RegisterCostumerform
  },{
    path: '/users/:id',
    component: User
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
