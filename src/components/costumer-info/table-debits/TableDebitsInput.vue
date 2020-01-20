<template>
    <tr>
        <td class="table__body--input-row" colspan="5">
            <input class="table__body--input-row--bar" type="text" placeholder="Nome do pedido" v-model="name">
            <input class="table__body--input-row--bar" type="text" placeholder="R$ 0.00" v-model="price" v-mask="'R$ #.##'">
            <button class="table__body--input-row--button" @click="isInputValid">+</button>
        </td>
    </tr>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
import { TheMask } from 'vue-the-mask'

export default {
    components: { TheMask },
    data() {
        return {
            id: this.$route.params.id,
            name: '',
            price: ''
        }
    },
    methods: {
        isInputValid() {
            const debitNameRegex = /\w+/i
            const debitPriceRegex = /\d+(\.\d+)?/

            if (this.name.match(debitNameRegex) && this.price.match(debitPriceRegex)){
                function currentDate() {
                    let nowDate = Date(Date.now()).toString()
                    const dateRegExp = /\w{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}/i
                    return nowDate.match(dateRegExp)
                }
                
                let debit = {
                    name: this.name,
                    price: this.price.match(debitPriceRegex)[0],
                    date: currentDate()[0],
                    isPaid: false
                }

                console.log(debit)

                const db = firebase.database()
                db.ref(`users/${this.id}/debits`).push(debit)

            } else {
                console.log('Formulário errado!')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.table__body--input-row {
    background-color: #576574;
    text-align: center;
    padding: .9rem;

    &--bar {
        font-size: 1.6rem;
        margin: 0 1rem;
        padding: .5rem;
        border: none;

        &::placeholder {
            font-size: 1.2rem;
        }
    }

    &--button {
        display: inline-block;
        border: 1px solid transparent;
        margin: 0 .5rem;
        height: 2.1rem;
        width: 2.1rem;
        border-radius: 50%;
        transition: color .15s;
        font-weight: bold;
        color: #FFF;
        background-color: #44bd32;
        outline: none;
        cursor: pointer;

        &:active {
            background-color: rgb(38, 159, 20);
        }
    }
}
</style>