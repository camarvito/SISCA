import Vue from 'vue';
import VueRouter from 'vue-router';

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
        component: () => import('@/views/Dashboard/Home.vue'),
        meta: {
          title: 'Bem-vindo(a)',
        },
      },
      {
        name: 'busca-cliente',
        path: 'busca-cliente',
        component: () => import('@/components/costumer-table/TableClients.vue'),
        meta: {
          title: 'Buscar cliente',
        },
      },
      {
        name: 'cadastrar-usuario',
        path: 'cadastrar-usuario',
        component: () => import('@/views/Dashboard/RegisterCostumerForm.vue'),
        meta: {
          title: 'Cadastrar usuário',
        },
      },
      {
        name: 'costumers',
        path: 'costumers/:id',
        component: () => import('@/components/costumer-info/Costumer.vue'),
        meta: {
          title: 'Dados do cliente',
        },
      },
      {
        name: 'support',
        path: 'support',
        component: () => import('@/views/Dashboard/Support.vue'),
        meta: {
          title: 'Sobre',
        },
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/Login.vue'),
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
