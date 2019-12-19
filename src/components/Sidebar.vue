<template>
  <div class="sidebar">
            <ul>
                <li class="sidebar__item">
                        <svg class="sidebar__item--icon"> <use xlink:href="@/assets/sprites.svg#home-icon-silhouette"></use></svg>
                        <span class="sidebar__item--name">Home</span>
                </li>
                <li class="sidebar__item">
                        <svg class="sidebar__item--icon"> <use xlink:href="@/assets/sprites.svg#new-user"></use></svg>
                        <span class="sidebar__item--name">Cadastrar cliente</span>
                </li>
                <li class="sidebar__item">
                        <svg class="sidebar__item--icon"> <use xlink:href="@/assets/sprites.svg#give-money"></use></svg>
                        <span class="sidebar__item--name">Pagar débitos</span>
                </li>

                <li class="sidebar__item" @click="active = !active" :class="{'sidebar__item--selected': active}">
                        <svg class="sidebar__item--icon" :style="active ? {'fill' : '#000'} : {}">
                            <use xlink:href="@/assets/sprites.svg#line-chart"></use></svg>
                        <span class="sidebar__item--name">Gerencial</span>
                        <svg :class="{'sidebar__item--arrow-active': active, 'sidebar__item--arrow': !active}">
                            <use xlink:href="@/assets/sprites.svg#arrow-point-to-right"></use>
                        </svg>
                </li>
                <ul v-show="active">
                    <li class="sidebar__item__sub--li">Ver devedores</li>
                    <li class="sidebar__item__sub--li">Relatório últimos 30 dias</li>
                    <li class="sidebar__item__sub--li">Relatório completo</li>
                </ul>

                <li class="sidebar__item" @click="active = !active" :class="{'sidebar__item--selected': active}">
                    <svg class="sidebar__item--icon" 
                    :style="active ? {'fill' : '#000'} : {}"> 
                        <use xlink:href="@/assets/sprites.svg#medical-notes-symbol-of-a-list-paper-on-a-clipboard"></use>
                    </svg>
                    <span class="sidebar__item--name">Logs</span>
                    <svg :class="{'sidebar__item--arrow-active': active, 'sidebar__item--arrow': !active}">
                        <use xlink:href="@/assets/sprites.svg#arrow-point-to-right"></use>
                    </svg>
                </li>

                <li class="sidebar__item">
                        <svg class="sidebar__item--icon"> <use xlink:href="@/assets/sprites.svg#two-settings-cogwheels"></use></svg>
                        <span class="sidebar__item--name">Configuração</span>
                        <svg class="sidebar__item--arrow"><use xlink:href="@/assets/sprites.svg#arrow-point-to-right"></use></svg>
                </li>
                <li class="sidebar__item">
                    <svg class="sidebar__item--icon"> <use xlink:href="@/assets/sprites.svg#help"></use></svg>
                    <span class="sidebar__item--name">Suporte</span>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    data() {
        return {
            active: false
        }
    }
}
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

    &__item {
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

// @keyframes arrow-rotate {
//     0% {
//         transform: rotate(0deg);
//     }
//     100% {
//         transform: rotate(90deg);
//     }
// }
</style>