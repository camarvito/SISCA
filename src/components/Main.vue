<template>
    <main class="main__layout">
        <Sidebar />
        <Content />
    </main>
</template>

<script>
import Sidebar from './Sidebar'
import Content from './Content'

export default {
    components: {
        Sidebar, 
        Content
    }
}
</script>

<style lang="scss">
.main {
    &__layout {
        display: grid;
        grid-template-columns: 20% 1fr;
        height: 100vh;
        //grid-auto-rows: minmax(100px, auto);
    }
}
</style>