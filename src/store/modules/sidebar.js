export default {
    namespaced: true,
    state: {
        sidebarItems: [
            {
                name: 'Home',
                path: 'home',
                icon:
                    '<use xlink:href="/img/sprites.35d4d5b2.svg#home-icon-silhouette"></use>',
                isSelected: true,
                isClickable: true,
            },
            {
                name: 'Cadastrar cliente',
                path: 'cadastrar-usuario',
                icon:
                    '<use xlink:href="/img/sprites.35d4d5b2.svg#new-user"></use>',
                isSelected: false,
                isClickable: true,
            },
            {
                name: 'Pagar débitos',
                icon:
                    '<use xlink:href="/img/sprites.35d4d5b2.svg#give-money"></use>',
                isSelected: false,
                isClickable: false,
            },
            {
                name: 'Gerencial',
                icon:
                    '<use xlink:href="/img/sprites.35d4d5b2.svg#line-chart"></use>',
                subItems: [
                    'Ver devedores',
                    'Relatório últimos 30 dias',
                    'Relatório completo',
                ],
                isSelected: false,
                isClickable: true,
            },
            {
                name: 'Logs',
                path: 'login',
                icon:
                    '<use xlink:href="/img/sprites.35d4d5b2.svg#medical-notes-symbol-of-a-list-paper-on-a-clipboard"></use>',
                isSelected: false,
                isClickable: false,
            },
            {
                name: 'Configuração',
                icon:
                    '<use xlink:href="/img/sprites.35d4d5b2.svg#two-settings-cogwheels"></use>',
                subItems: [
                    'Preferências de usuário',
                    'Ajustes de administrador',
                ],
                isSelected: false,
                isClickable: false,
            },
            {
                name: 'Suporte',
                path: 'support',
                icon: '<use xlink:href="/img/sprites.35d4d5b2.svg#help"></use>',
                isSelected: false,
                isClickable: true,
            },
        ],
    },
    mutations: {
        itemSelected(state, payload) {
            state.sidebarItems.forEach((item, index) => {
                if (item.name !== payload) {
                    state.sidebarItems[index].isSelected = false;
                } else {
                    state.sidebarItems[index].isSelected = true;
                }
            });
        },
    },
    actions: {},
};
