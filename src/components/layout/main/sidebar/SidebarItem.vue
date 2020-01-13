<template>
    <div>
        <router-link tag="li" class="sidebar__item" @click.native="active" :class="{'sidebar__item--selected': isActive}" :to="`/${path}`">
            <svg v-html="icon" class="sidebar__item--icon" :style="isActive ? {'fill' : '#000'} : {}"></svg>

            <span class="sidebar__item--name">{{ name }}</span>
            
            <svg v-if="subItems" :class="{'sidebar__item--arrow-active': isActive, 'sidebar__item--arrow': !isActive}">
                <use xlink:href="@/assets/sprites.svg#arrow-point-to-right"></use>
            </svg>
        </router-link>
        <ul v-if="subItems && isActive">
                <li v-for="item in subItems" :key="item" class="sidebar__item__sub--li">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        isActive() {
            return this.isSelected
        }
    },
    methods: {
        active(){
            if (!this.isActive){
                this.$emit('itemSelected', this.name)
            }
        }
    },
    props: { 
        name: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: true
        },
        subItems: {
            required: true
        },
        isSelected: {
            type: Boolean,
            required: false
        }
    }
}
</script>

<style lang="scss">
    .sidebar__item {
        display: flex;
        align-items: center;
        padding: 2rem 1rem;
        margin: 1rem;
        cursor: pointer;

        &:hover &--icon, &:hover &--name {
            color: #000;
            fill: #000;
        }

        &:hover &--arrow {
            fill: #000;
            animation-name: arrow-pulse-right;
            animation-duration: 1.2s;
            animation-iteration-count: infinite;
        }

        &--arrow-active {
            height: 1.6rem;
            width: 1.6rem;
            fill: #000;
            margin-left: auto;

            transform: rotate(90deg);
            transition: .5s;
        }

        &--icon {
            transition-property: color;
            transition-duration: .5s;
            height: 2rem;
            width: 2rem;
            fill: #8a8a8a;
        }

        &--name {
            transition-property: color;
            transition-duration: .5s;
            font-size: 1.6rem;
            margin-left: 2rem;
        }

        &--arrow {
            height: 1.6rem;
            width: 1.6rem;
            fill: #8a8a8a;
            margin-left: auto;

            transform: rotate(0deg);
            transition: .5s;
        }

        &--selected {
            color: #000;
            fill: #000;
        }

        &__sub--li {
            display: flex;
            align-items: center;
            padding: 1rem 1rem;
            margin: 1rem 1rem 1rem 5rem;
        }
    }

/* Animations */
@keyframes arrow-pulse-right {
        0% {
            margin-right: 0;
        }
        50% {
            margin-right: 1.5rem;
        }
        100% {
            margin-right: 0;
        }
}
</style>