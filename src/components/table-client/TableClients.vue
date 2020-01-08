<template>
    <div>
        <div class="search__container">
            <input type="text" class="search__bar" placeholder="Digite o nome do cliente" />
        </div>

        <div class="table__container">
            <table class="table__frame">
                <thead>
                    <tr>
                        <th class="table__head--header">Nome</th>
                        <th class="table__head--header">Matricula</th>
                        <th class="table__head--header">CPF</th>
                        <th class="table__head--header">Telefone</th>
                        <th class="table__head--header">Ações</th>
                    </tr>
                    <!-- <tr class="warning no-result">
                        <td colspan="4">
                            <i class="fa fa-warning"></i> No result
                        </td>
                    </tr> -->
                </thead>
                <tbody>
                    <tr>
                        <td class="table__body--cell">Alfalfa</td>
                        <td class="table__body--cell">Batata</td>
                        <td class="table__body--cell">Tomates</td>
                        <td class="table__body--cell">Legumes</td>
                        <td class="table__body--cell">
                            <button class="btn btn--exclude">
                                <svg class="btn--icon">
                                    <use xlink:href="@/assets/sprites.svg#trash"></use>
                                </svg>
                            </button>
                            <button class="btn btn--edit">
                                <svg class="btn--icon">
                                    <use xlink:href="@/assets/sprites.svg#pencil-edit-button"></use>
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {

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

    &__head {

        &--header {
            padding: 1rem;
            border: 1px solid #dee2e6;
            text-align: initial;
        }

        &--cell {
            border: 1px solid #dee2e6;
            padding: 1rem;       
        }
    }

    &__body {

        &--cell {
            border: 1px solid #dee2e6;
            padding: 1rem;   
        }
    }
}

.btn {
    display: inline-block;
    border: 1px solid transparent;
    padding: .7rem .7rem;
    margin: 0 .5rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s;

    &--icon {
        height: 2rem;
        width: 2rem;
        fill: #FFF;
    }

    &--exclude {
        background-color: #e74c3c;
    }

    &--edit {
        background-color: #f1c40f;
    }
}


</style>