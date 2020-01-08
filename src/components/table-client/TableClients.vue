<template>
    <div>
        <div class="search__container">
            <input type="text" class="search__bar" placeholder="Digite o nome do cliente" />
        </div>

        <div class="table__container">
            <table class="table__frame">
                <TableClientsHeader />
                <TableClientsRow v-for="user in users" :key="user.registration" :name="user.name" :registration="user.registration" :cpf="user.cpf"/>
            </table>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';

import TableClientsHeader from './TableClientsHeader'
import TableClientsRow from './TableClientsRow'

export default {
    components: { TableClientsHeader, TableClientsRow },
    data() {
        return {
            users: []
        }
    },
    methods: {
        
    },
    mounted() { /* Ao montar o componente, pega do Firebase todos os usuarios existentes e os armazena na instancia */
        let db = firebase.database().ref('users')
        db.on('value', snapshot => {
            snapshot.forEach(childSnapshot => {
                let user = childSnapshot.val()
                this.users.push(user)
            })
        })
    }
};
</script>

<style lang="scss" scoped>
.search {
    &__container {
        display: flex;
        box-sizing: border-box;
        padding: 2rem;
    }

    &__bar {
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 2rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        text-transform: uppercase;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        &::placeholder {
            font-weight: 100;
            text-transform: initial;
        }
    }
}

.table {
    &__container {
        padding: 2rem;
    }

    &__frame {
        width: 100%;
        max-width: 100%;
        margin-bottom: 1rem;
        background-color: transparent;
        border: 1px solid #dee2e6;
        border-collapse: collapse;
    }
}
</style>