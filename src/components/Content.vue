<template>
    <div class="content">
        <contentHeader @clear="clearForm" />
        <router-view ref="CadastrarUsuario" />
    </div>
</template>

<script>
import contentHeader from './ContentHeader'
import CadastrarUsuario from './register-client/CadastrarUsuario'
import TableClients from './table-client/TableClients'

export default {
    components: { contentHeader, CadastrarUsuario, TableClients },
    methods: {
        clearForm(){
            this.$refs.CadastrarUsuario.clear()
        }
    }
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