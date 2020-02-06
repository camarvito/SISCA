<template>
    <div class="container">
        <LoginInput />
        <div class="login__partners">
            <!-- <div> -->
                <img class="login__partners--img--1" src="@/assets/img/ufc-qxd.png" alt="ufc-quixada-logo">
            <!-- </div> -->
            <!-- <div> -->
                <img class="login__partners--img--2" src="@/assets/img/logo-inove-dev.png" alt="inove-dev-logo">
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
import LoginInput from '../components/login-screen/LoginInput.vue'

export default {
    components: { LoginInput },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login__partners {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 56rem;
    padding: 2rem;

    &--img {
        &--1 {
            width: 35rem;
        }

        &--2 {
            width: 20rem;
        }
    }
}
</style>
