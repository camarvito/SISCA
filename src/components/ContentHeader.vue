<template>
  <div class="content__header">
        <div class="content__header--title">Cadastrar cliente</div>
            <div class="content__header--options">
                <svg class="content__header--options--icon"><use xlink:href="@/assets/sprites.svg#refresh-button"></use></svg>
                <svg class="content__header--options--icon"><use xlink:href="@/assets/sprites.svg#back-arrow"></use></svg>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content__header {
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
</style>