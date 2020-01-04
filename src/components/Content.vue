<template>
    <div class="content">
        <contentHeader @clear="clearForm" />
        <CadastrarUsuario ref="CadastrarUsuario" />
    </div>
</template>

<script>
import contentHeader from './ContentHeader'
import CadastrarUsuario from './CadastrarUsuario'

export default {
    components: { contentHeader, CadastrarUsuario },
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
    height: 40rem;
}
</style>