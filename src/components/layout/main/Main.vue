<template>
    <main class="main__layout">
        <Sidebar @itemSelected="itemSelected($event)"/><!--:sidebarItems="sidebarItems"-->
        <Content />
    </main>
</template>

<script>
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'

export default {
    data() {
        return {}
    },
    methods: {
        itemSelected(itemName){
            this.sidebarItems.forEach((item, index) => {
                if (item.name !== itemName){
                    this.sidebarItems[index].isSelected = false
                } else {
                    this.sidebarItems[index].isSelected = true
                }
            })
        }
    },
    components: { Sidebar, Content },
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