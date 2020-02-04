<template>
    <header>
        <nav class="navbar">
            <h2>
                <span class="navbar__acronym">SISCA</span> |
                <span class="navbar__title">Sistema da Cantina</span>
            </h2>
            <span class="navbar__mode">Desenvolvimento</span>

            <div class="navbar__user-login">
                <svg class="navbar__user-login--icon">
                    <use xlink:href="@/assets/sprites.svg#user"></use>
                </svg>

                <h2>Victor Camargo</h2>
                <div
                    class="navbar__user-login--drop"
                    @click="isMenuClicked = !isMenuClicked"
                >
                    &#9662;
                </div>
            </div>
        </nav>
        <ul v-show="isMenuClicked" class="navbar__options">
            <li class="navbar__options--li">Opções</li>
            <li class="navbar__options--li">Logout</li>
        </ul>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuClicked: false,
        };
    },
};
</script>

<style lang="scss">
.navbar {
    display: flex;
    justify-content: space-between;

    height: 6rem;
    padding: 0 2rem;
    align-items: center;
    background-color: #2980b9;

    color: white;

    &__acronym {
        font-weight: bold;
    }

    &__mode {
        font-size: 0.95rem;
        font-weight: bold;
        padding: 0.3rem 1.5rem;
        color: #fff;
        background-color: #6ab04c;
        text-transform: uppercase;
        border-radius: 50px;
        margin-right: auto;
        margin-left: 1rem;
    }

    &__title {
        font-weight: bold;
    }

    &__user-login {
        display: flex;
        align-items: center;
        margin-right: 1rem;

        &--icon {
            height: 1.8rem;
            width: 1.8rem;
            fill: #fff;
            margin-right: 1rem;
        }

        &--drop {
            cursor: pointer;
            font-size: 1.6rem;
            margin-left: 0.5rem;
        }
    }

    &__options {
        position: absolute;
        z-index: 1000;
        right: 2rem;
        padding: 0;
        margin: 0;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 4px;

        &--li {
            list-style: none;
            font-size: 1.4rem;
            padding: 1rem 4rem;
            cursor: pointer;
            &:hover {
                background-color: #ddd;
            }
        }
    }
}
</style>
