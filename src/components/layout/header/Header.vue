<template>
  <header>
        <nav class="navbar">
            <h2> <span class="navbar__acronym">SISCA</span> | <span class="navbar__title">Sistema da Cantina</span></h2>
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

    &__acronym {
        font-weight: bold;
    }

    &__title {
        font-weight: bold;
    }

    &__user-login {
        margin-right: 1rem;
    }
}
</style>