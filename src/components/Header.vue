<template>
  <header>
        <nav class="navbar">
            <h2>SISCA | Sistema da Cantina</h2>
            <div class="navbar__user-login">
                <h2>Victor Camargo</h2>
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
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

    &__user-login {
        margin-right: 1rem;
    }
}
</style>