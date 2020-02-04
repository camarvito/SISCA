<template>
    <tr class="table__body--row--total">
        <td class="table__body--row--cell">Total</td>
        <td class="table__body--row--cell"></td>
        <td class="table__body--row--cell"></td>
        <td class="table__body--row--cell"></td>
        <td class="table__body--row--cell">R$ {{ total }}</td>
    </tr>
</template>

<script>
export default {
    props: {
        prices: Array
    },
    data() {
        return {};
    },
    computed: {
        total() {
            const reducer = (acc, val) => acc + val;
            if (!this.prices[0]) {
                return 0;
            }
            return this.prices.reduce(reducer).toFixed(2);
        }
    }
};
</script>

<style lang="scss" scoped>
.table__body--row {
    &--total {
        background-color: #353b48;
    }

    &--cell {
        font-size: 1.4rem;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        padding: 1.4rem;
        color: #fff;
    }
}
</style>
