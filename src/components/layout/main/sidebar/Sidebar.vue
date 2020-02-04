<template>
    <div class="sidebar">
        <ul>
            <SidebarItem
                v-for="(item, index) in sidebarItems"
                :key="index"
                :name="item.name"
                :icon="item.icon"
                :subItems="item.subItems"
                :path="item.path"
                :isSelected="item.isSelected"
                :isClickable="item.isClickable"
                @itemSelected="itemSelected($event)"
            />
        </ul>
    </div>
</template>

<script>
import SidebarItem from './SidebarItem';

export default {
    computed: {
        sidebarItems() {
            return this.$store.state.sidebar.sidebarItems;
        },
    },
    methods: {
        itemSelected(name) {
            this.$store.commit('sidebar/itemSelected', name);
        },
    },
    components: { SidebarItem },
};
</script>

<style lang="scss">
.sidebar {
    background-color: white;
    font-size: 1.2rem;
    font-weight: 400;
    color: #8a8a8a;

    box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);

    & ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
}
</style>
