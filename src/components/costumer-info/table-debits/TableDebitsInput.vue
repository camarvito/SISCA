<template>
    <tr>
        <td class="table__body--input-row" colspan="5">
            <input class="table__body--input-row--bar" type="text" placeholder="Nome do Pedido" v-model="debit.name" @blur="isInputValid">
            <input class="table__body--input-row--bar" type="text" placeholder="Preço" v-model="debit.price" @blur="isInputValid">
        </td>
    </tr>
</template>

<script>
export default {
    computed: {
        debit: {
            name: {
                get() {
                    return this.$store.state.tableDebits.debit.name
                },
                set(value) {
                    this.$store.commit('tableDebits/setName', value)
                }
            },
            price: {
                get() {
                    return this.$store.state.tableDebits.debit.price
                },
                set(value) {
                    this.$store.commit('tableDebits/setPrice', value)
                }
            }
        }
    },
    methods: {
        isInputValid() {
            if (this.debit.name && this.debit.price){
                this.$store.commit('tableDebits/changeState', 2)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.table__body--input-row {
    background-color: #576574;
    text-align: center;
    padding: 1.4rem;

    &--bar {
        font-size: 1.6rem;
        margin: 0 1rem;
        padding: .5rem;
    }
}
</style>