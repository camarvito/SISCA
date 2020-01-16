<template>
    <div class="content">
        <ContentHeader />
        <transition name="slide" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
import ContentHeader from './ContentHeader'

export default {
    components: { ContentHeader },
    methods: {
        clearForm(){
            // this.$refs.CadastrarUsuario.clear()
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

@keyframes slide-in {
    from { transform: translateY(-30px); opacity: 0; }
    to { transform: translateY(0px); opacity: 1; }
}

@keyframes slide-out {
    from { transform: translateY(0px); opacity: 1; }
    to { transform: translateY(-30px); opacity: 0; }
}

.slide-enter-active {
    animation: slide-in .3s ease;
}

.slide-leave-active {
    animation: slide-out .3s ease;
}
</style>