<template>
    <div class="login__box">
        <div>
            <input type="text" placeholder="Usuário" />
        </div>
        <div>
            <input type="password" placeholder="Senha" />
        </div>
        <div>
            <button>Login</button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login__box {
    display: flex;
    flex-direction: column;
    padding: 4rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.15);
}
</style>
