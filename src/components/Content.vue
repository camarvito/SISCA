<template>
    <div class="content">
        <contentHeader @clear="clearForm" />
        <button @click="woahVicky">AAA</button>
        <hr>
        <button @click="woahVicko">BBB</button>
        <router-view />
    </div>
</template>

<script>
import firebase from 'firebase'
import contentHeader from './ContentHeader'
import CadastrarUsuario from './register-client/CadastrarUsuario'
import SearchContainer from './table-client/SearchContainer'

export default {
    data(){
        return {
            carti: {
                name: 'ana',
                age: '32'
            }
        }
    },
    components: { contentHeader, CadastrarUsuario, SearchContainer },
    methods: {
        clearForm(){
            this.$refs.CadastrarUsuario.clear()
        },
        woahVicky() {
        firebase.database().ref('users').set({
            username: 'Victor',
            email: 'vic',
            profile_picture : 'woah vicaay',
            carti: ''
    })},
        woahVicko() {
        firebase.database().ref('users').child('carti').push(this.carti)
        console.log("lido2")
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