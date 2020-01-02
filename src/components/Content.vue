<template>
    <div class="content">
        <contentHeader />
        <cadastrarUsuario />
    </div>
</template>

<script>
import contentHeader from './ContentHeader'
import cadastrarUsuario from './CadastrarUsuario'

export default {
    components: { contentHeader, cadastrarUsuario }
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