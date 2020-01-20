<template>
    <tr class="table__body--row--total">
        <td class="table__body--row--cell">Total</td>
        <td class="table__body--row--cell"></td>
        <td class="table__body--row--cell"></td>
        <td class="table__body--row--cell"></td>
        <td class="table__body--row--cell">R$ 7,30</td>
    </tr>
</template>

<script>
export default {

}
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
            color: #FFF;
        }
    }
</style>