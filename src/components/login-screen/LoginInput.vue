<template>
    <div class="login__box">
        <div class="box--logo">
            <div>
                <img src="@/assets/img/candy-shop.png" alt="sisca-symbol">
            </div>
            <div class="titles">
                <span class="titles--main">Sistema da Cantina</span><br>
                <span class="titles--sub">Versão Beta</span>
            </div>
        </div>
        <div class="box--inputs">
            <div class="input">
                <span class="input__icon">
                    <svg class="input__icon--svg">
                        <use xlink:href="@/assets/sprites.svg#user-1"></use>
                    </svg>
                </span>
                <input class="input__bar" type="text" placeholder="Usuário" />
            </div>
            <div class="input">
                <span class="input__icon">
                    <svg class="input__icon--svg">
                        <use xlink:href="@/assets/sprites.svg#lock"></use>
                    </svg>
                </span>
                <input class="input__bar" type="password" placeholder="Senha" />
            </div>
            <div class="input__button">
                <button class="input__button--btn">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login__box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 4rem;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 2px #ffffff;
}

.titles {
    margin-left: 1rem;

    &--main {
        font-weight: lighter;
        font-size: 2rem;
    }

    &--sub {
        font-size: 1rem;
    }
}

.input {
    display: flex;
    align-items: center;
    margin: 1.2rem 0;

    &:last-child {
        margin: 0 0 1.2rem 0;
    }

    &__icon {
        background-color: #2D72BC;
        padding: 1.4rem;

        &--svg {
            fill: #FFF;
            height: 1.4rem;
            width: 1.4rem;
        }
    }

    &__bar {
        border-radius: 0;
        height: 40px;
        font-size: 15px;
        color: #555;
        background-color: #fff;
        border: 1px solid #ccc;
        padding-left: .5rem;
        
    }

    &__button {
        display: flex;
        justify-content: center;

        &--btn {
            border: none;
            background-color: #2D72BC;
            color: #FFF;
            padding: 1.4rem;
            border-radius: .4rem;
            width: 30%;
            cursor: pointer;
            outline: none;

            &:active {
                background-color: rgb(15, 84, 158);
            }
        }
    }
}

</style>
