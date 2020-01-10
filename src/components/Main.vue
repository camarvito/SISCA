<template>
    <main class="main__layout">
        <Sidebar :sidebarItems="sidebarItems" @itemSelected="itemSelected($event)"/>
        <Content />
    </main>
</template>

<script>
import Sidebar from './Sidebar'
import Content from './Content'

export default {
    data() {
        return {
            sidebarItems: [
                { name: 'Home', path: '/home', icon: '<use xlink:href="/img/sprites.84041316.svg#home-icon-silhouette"></use>', isSelected: true },
                { name: 'Cadastrar cliente', path: 'cadastrar-usuario', icon: '<use xlink:href="/img/sprites.84041316.svg#new-user"></use>', isSelected: false },
                { name: 'Pagar débitos', icon: '<use xlink:href="/img/sprites.84041316.svg#give-money"></use>', isSelected: false },
                { name: 'Gerencial', icon: '<use xlink:href="/img/sprites.84041316.svg#line-chart"></use>', isSelected: false, subItems: ['Ver devedores', 'Relatório últimos 30 dias', 'Relatório completo']},
                { name: 'Logs', icon: '<use xlink:href="/img/sprites.84041316.svg#medical-notes-symbol-of-a-list-paper-on-a-clipboard"></use>', isSelected: false },
                { name: 'Configuração', icon: '<use xlink:href="/img/sprites.84041316.svg#two-settings-cogwheels"></use>', isSelected: false, subItems: ['Preferências de usuário', 'Ajustes de administrador']},
                { name: 'Suporte', icon: '<use xlink:href="/img/sprites.84041316.svg#help"></use>', isSelected: false}
            ]
        }
    },
    methods: {
        itemSelected(itemName){
            this.sidebarItems.forEach((item, index) => {
                if (item.name !== itemName){
                    this.sidebarItems[index].isSelected = false
                } else {
                    this.sidebarItems[index].isSelected = true
                }
            })
        }
    },
    components: { Sidebar, Content },
}
</script>

<style lang="scss">
.main {
    &__layout {
        display: grid;
        grid-template-columns: 20% 1fr;
        height: 100vh;
        //grid-auto-rows: minmax(100px, auto);
    }
}
</style>