import Vue from 'vue'
import VueRouter from 'vue-router'
import TableClients from '../components/costumer-table/TableClients'
import RegisterCostumerForm from '../components/costumer-register-form/RegisterCostumerForm'
import Costumer from '../components/costumer-info/Costumer'

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
    component: RegisterCostumerForm
  },{
    path: '/costumers/:id',
    component: Costumer
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
