<template>
    <tr>
        <td class="table__body--input-row" colspan="5">
            <input class="table__body--input-row--bar" type="text" placeholder="Nome do Pedido" v-model="debit.name">
            <input class="table__body--input-row--bar" type="text" placeholder="Preço" v-model="debit.price">
        </td>
    </tr>
</template>

<script>
export default {
    data() {
        return {
            debit: {
                name: '',
                price: '',
                date: this.getCurrentDate()[0]
            }
        }
    },
    methods: {
        isInputValid() {
            if (this.debit.name && this.debit.price){
                this.$emit('inputValid')
            }
        },
        getCurrentDate() {
            const nowDate = Date(Date.now()).toString()
            const dateRegExp = /\w{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}/i
            return nowDate.match(dateRegExp)
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