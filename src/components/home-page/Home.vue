<template>
    <div class="home">
        <router-link tag="div" to="/busca-cliente" class="home__button search">
            <svg class="home__button--icon">
                <use xlink:href="@/assets/sprites.svg#magnifying-glass"></use>
            </svg>
            <div class="home__button--text">BUSCAR<br />CLIENTE</div>
        </router-link>
        <div class="home__button register-costumer">
            <svg class="home__button--icon">
                <use xlink:href="@/assets/sprites.svg#eye"></use>
            </svg>
            <div class="home__button--text">
                VER DEVEDORES<br />
                <span style="font-size: 1.4rem">(Em breve)</span>
            </div>
        </div>
        <div class="home__button debtors">
            <svg class="home__button--icon">
                <use xlink:href="@/assets/sprites.svg#shopping-cart"></use>
            </svg>
            <div class="home__button--text">
                PASSAR PRODUTOS<br />
                <span style="font-size: 1.4rem">(Em breve)</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('contentHeader/changeContentHeader', {
            title: 'Bem-vindo(a)',
            loadClear: false,
            loadReturn: true,
        });
    },
};
</script>

<style lang="scss">
.home {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem;

    &__button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-family: inherit;
        font-size: 2.6rem;
        /* text-transform: uppercase; */
        color: #fff;

        height: 24rem;
        margin: 1rem;
        border-radius: 0.4rem;

        &--icon {
            height: 8rem;
            width: 8rem;
            fill: #fff;
        }

        &--text {
            text-align: center;
            margin: 1rem;
        }
    }
}

.search {
    background-color: #0984e3;
    cursor: pointer;

    &:active {
        background-color: rgb(7, 93, 158);
    }
}

.register-costumer {
    background-color: #636e72;
}

.debtors {
    background-color: #636e72;
}
</style>
