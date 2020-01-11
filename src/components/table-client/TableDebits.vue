<template>
  <table class="table__frame">
        <thead>
            <tr class="table__header--row">
                <td class="table__header--row--cell">Data Lançamento</td>
                <td class="table__header--row--cell">Pedido</td>
                <td class="table__header--row--cell">Valor</td>
                <td class="table__header--row--cell">Status</td>
                <td class="table__header--row--cell">Ação</td>
            </tr>
        </thead>
        <tbody>
            <tr class="table__body--row odd">
                <td class="table__body--row--cell">10/01/2020</td>
                <td class="table__body--row--cell">Tapioca</td>
                <td class="table__body--row--cell">R$ 3.50</td>
                <td class="table__body--row--cell">R$ 3.50</td>
                <td class="table__body--row--cell"><button class="btn btn--include uppercase">A</button></td>
            </tr>
            <tr class="table__body--row even">
                <td class="table__body--row--cell">10/01/2020</td>
                <td class="table__body--row--cell">Tapioca</td>
                <td class="table__body--row--cell">R$ 3.50</td>
                <td class="table__body--row--cell">R$ 3.50</td>
                <td class="table__body--row--cell"><button class="btn btn--include uppercase">A</button></td>
            </tr>
            <tr class="table__body--row odd">
                <td class="table__body--row--cell">10/01/2020</td>
                <td class="table__body--row--cell">Tapioca</td>
                <td class="table__body--row--cell">R$ 3.50</td>
                <td class="table__body--row--cell">R$ 3.50</td>
                <td class="table__body--row--cell"><button class="btn btn--include uppercase">A</button></td>
            </tr>
            <tr class="table__body--row even">
                <td class="table__body--row--cell">10/01/2020</td>
                <td class="table__body--row--cell">Tapioca</td>
                <td class="table__body--row--cell">R$ 3.50</td>
                <td class="table__body--row--cell">R$ 3.50</td>
                <td class="table__body--row--cell"><button class="btn btn--include uppercase">A</button></td>
            </tr>
            <tr>
                <td class="table__body--row--add" colspan="5">
                    <button class="btn btn--include uppercase">Adicionar novo débito</button>  
                </td>
            </tr>
            <tr class="table__body--row--total">
                <td class="table__body--row--cell">Total</td>
                <td class="table__body--row--cell"></td>
                <td class="table__body--row--cell"></td>
                <td class="table__body--row--cell"></td>
                <td class="table__body--row--cell">R$ 3.50</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {

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

.table__body {
    &--row {

        &--cell {
            width: 20%;
            font-size: 1.2rem;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            padding: 1.4rem;
            color: #000;
        }

        &--add {
            text-align: center;
            font-size: 1.2rem;
            text-transform: uppercase;
            padding: 1.4rem;
            background-color: #c0c0c0;
        }

        &--total {
            background-color: #636e72;
        }
    }
}

.uppercase {
    // font-weight: bold;
    text-transform: uppercase;
}

.odd {
    background-color: #f5f6fa;
}

.even {
    background-color: #dcdde1;
}

</style>