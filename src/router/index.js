import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Dashboard/DashboardHome.vue';
import TableClients from '../components/costumer-table/TableClients.vue';
import RegisterCostumerForm from '../components/costumer-register-form/RegisterCostumerForm.vue';
import Costumer from '../components/costumer-info/Costumer.vue';
import Support from '../components/support/Support.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*', // Redireciona todas as rotas não listadas aqui para a home.
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: () => import('@/views/Dashboard/Dashboard.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: Home,
        meta: {
          title: 'Bem-vindo(a)',
        },
      },
      {
        name: 'busca-cliente',
        path: 'busca-cliente',
        component: TableClients,
        meta: {
          title: 'Buscar cliente',
        },
      },
      {
        name: 'cadastrar-usuario',
        path: 'cadastrar-usuario',
        component: RegisterCostumerForm,
        meta: {
          title: 'Cadastrar usuário',
        },
      },
      {
        name: 'costumers',
        path: 'costumers/:id',
        component: Costumer,
        meta: {
          title: 'Dados do cliente',
        },
      },
      {
        name: 'support',
        path: 'support',
        component: Support,
        meta: {
          title: 'Sobre',
        },
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});

export default router;
