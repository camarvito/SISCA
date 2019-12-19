<template>
    <div class="content">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.content {
    grid-row: 1;
    grid-column: 2;
    background-color: #FFF;

    margin: 2rem; /* Corrigir isso depois com a propriedade gap*/

    height: 40rem;

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: rgb(240, 240, 240);

        &--title {
            font-size: 2rem;
            font-weight: bold;
            text-transform: uppercase;
            color: #8a8a8a;
            margin-left: 2rem;
        }

        &--options {
            margin: 1rem;

            &--icon {
                height: 2.6rem;
                width: 2.6rem;
                fill: #8a8a8a;

                margin: 1rem;
            }
        }
    }

    &__form {
        padding: 2rem;
        
        &--title {
            display: block;
            font-size: 1.6rem;
            padding-left: 2rem;
            color: #8a8a8a;        
        }

        &__input-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 1fr);
            column-gap: 4rem;
            row-gap: 2rem;

            padding: 2rem;

            &--item {
                display: inline-block;
            }
        }
    }

    &__search {
        padding: 2rem;
    }
}
</style>