<template>
  <table class="table__frame">
        <thead>
            <TableDebitsHeader />
        </thead>
        <tbody>
            <TableDebitsRow v-for="(debit, index) in debits" :key="debit.key" :name="debit.name" :date="debit.date" :price="debit.price" :index="index"/>
            <TableDebitsInput v-if="isInputEnable" />
            <TableDebitsAdd />
            <TableDebitsTotal />
        </tbody>
    </table>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';

import TableDebitsHeader from './TableDebitsHeader'
import TableDebitsRow from './TableDebitsRow'
import TableDebitsInput from './TableDebitsInput'
import TableDebitsAdd from './TableDebitsAdd'
import TableDebitsTotal from './TableDebitsTotal'

export default {
    components: { TableDebitsHeader, TableDebitsRow, TableDebitsInput, TableDebitsAdd, TableDebitsTotal},
    data() {
        return {
            userId: this.$route.params.id,
            debits: [],
            isInputValid: false
        }
    },
    computed: {
        isInputEnable() {
            return true
        }
    },
    methods: {
        getUserDebits(){
            const currentUser = firebase.database().ref(`users/${this.userId}/debits`)
            currentUser.on('value', snapshot => {
                snapshot.forEach(childSnapshot => {
                    let debit = childSnapshot.val()
                    debit.key = childSnapshot.key /* Adiciona o atributo key, uma chave unica gerada pelo firebase */
                    this.debits.push(debit)
                })
            })
        }
    },
    mounted() {
        this.getUserDebits()
    }
}
</script>

<style lang="scss" scoped>
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

.uppercase {
    // font-weight: bold;
    text-transform: uppercase;
}
</style>