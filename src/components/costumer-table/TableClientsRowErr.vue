<template>
    <tr class="table__body--row-err">
        <td colspan="5" class="table__body--row-err--message">
            Sem resultados
            <svg class="table__body--row-err--message--icon">
                <use xlink:href="@/assets/sprites.svg#exclamation-button"></use>
            </svg>
        </td>
    </tr>
</template>

<script>
export default {};
</script>

<style lang="scss">
.table__body--row-err {
    display: table-row;
    background-color: #a5a5a51e;

    &--message {
        padding: 2rem;
        text-align: center;
        font-family: inherit;
        font-weight: lighter;
        font-size: 1.2rem;

        &--icon {
            width: 1.2rem;
            height: 1.2rem;
            vertical-align: middle;
        }
    }
}
</style>
