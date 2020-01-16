export default {
    namespaced: true,
    state: {
        sidebarItems: [
            {   
                name: 'Home', 
                path: '/home', 
                icon: '<use xlink:href="/img/sprites.8dc85041.svg#home-icon-silhouette"></use>', 
                isSelected: true 
            }, {
                name: 'Cadastrar cliente',  
                path: 'cadastrar-usuario',
                icon: '<use xlink:href="/img/sprites.8dc85041.svg#new-user"></use>',
                isSelected: false
            }, {
                name: 'Pagar débitos',
                icon: '<use xlink:href="/img/sprites.8dc85041.svg#give-money"></use>',
                isSelected: false  
            }, {
                name: 'Gerencial',
                icon: '<use xlink:href="/img/sprites.8dc85041.svg#line-chart"></use>',
                isSelected: false,
                subItems: ['Ver devedores', 'Relatório últimos 30 dias', 'Relatório completo']
            }, {
                name: 'Logs',
                icon: '<use xlink:href="/img/sprites.8dc85041.svg#medical-notes-symbol-of-a-list-paper-on-a-clipboard"></use>',
                isSelected: false,
            }, {
                name: 'Configuração',
                icon: '<use xlink:href="/img/sprites.8dc85041.svg#two-settings-cogwheels"></use>',
                isSelected: false,
                subItems: ['Preferências de usuário', 'Ajustes de administrador']   
            }, {
                name: 'Suporte',
                path: 'support',
                icon: '<use xlink:href="/img/sprites.8dc85041.svg#help"></use>',
                isSelected: false
            }
        ],
    },
    mutations: {
        itemSelected(state, payload){
            state.sidebarItems.forEach((item, index) => {
                if (item.name !== payload){
                    state.sidebarItems[index].isSelected = false
                } else {
                    state.sidebarItems[index].isSelected = true
                }
            })
        }
    },
    actions: {}
}