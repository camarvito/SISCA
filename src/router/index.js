import Vue from 'vue'
import VueRouter from 'vue-router'
import TableClients from '../components/costumer-table/TableClients'
import RegisterCostumerForm from '../components/costumer-register-form/RegisterCostumerForm'
import Costumer from '../components/costumer-info/Costumer'

Vue.use(VueRouter)

const routes = [
  {
    path: '*', // Redireciona todas as rotas não listadas aqui para a home. 
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
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
