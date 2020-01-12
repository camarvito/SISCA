<template>
    <tr class="table__header--row">
        <td class="table__header--row--cell">Data Lançamento</td>
        <td class="table__header--row--cell">Pedido</td>
        <td class="table__header--row--cell">Valor</td>
        <td class="table__header--row--cell">Status</td>
        <td class="table__header--row--cell">Ação</td>
    </tr>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.table__header {
    &--row {
        background-color: #353b48;

        &--cell {
            width: 20%;
            font-size: 1.4rem;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            padding: 1.4rem;
            color: #FFF;
        }
    }
}
</style>