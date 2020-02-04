<template>
    <div class="container">
        <LoginInput />
        <div class="login__partners">
            <div>Imagem A</div>
            <div>Imagem B</div>
        </div>
    </div>
</template>

<script>
import LoginInput from './LoginInput';

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
}
</style>
