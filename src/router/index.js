import Vue from 'vue';
import VueRouter from 'vue-router';
import TableClients from '../components/costumer-table/TableClients.vue';
import RegisterCostumerForm from '../components/costumer-register-form/RegisterCostumerForm.vue';
import Costumer from '../components/costumer-info/Costumer.vue';
import Support from '../components/support/Support.vue';
import Login from '../views/Login.vue';
import Home from '../components/home-page/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '*', // Redireciona todas as rotas não listadas aqui para a home.
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/busca-cliente',
        component: TableClients,
    },
    {
        path: '/cadastrar-usuario',
        component: RegisterCostumerForm,
    },
    {
        path: '/costumers/:id',
        component: Costumer,
    },
    {
        path: '/support',
        component: Support,
    },
    {
        path: '/login',
        component: Login,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
