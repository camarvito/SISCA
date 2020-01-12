<template>
    <div class="content">
        <ContentHeader @clear="clearForm" />
        <router-view /><!--ref="CadastrarUsuario"-->
    </div>
</template>

<script>
import ContentHeader from './ContentHeader'
// import CadastrarUsuario from '@/components/CadastrarUsuario'
// import TableClients from './table-client/TableClients'

export default {
    components: { contentHeader },
    // methods: {
    //     clearForm(){
    //         this.$refs.CadastrarUsuario.clear()
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.content {
    grid-row: 1;
    grid-column: 2;
    background-color: #FFF;
    margin: 2rem; /* Corrigir isso depois com a propriedade gap*/
    height: auto;
    display: inline-table;
}
</style>