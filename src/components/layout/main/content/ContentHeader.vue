<template>
  <div class="content__header">
        <div class="content__header--title">{{ title }}</div>
            <div class="content__header--options">
                <svg v-if="loadClear" class="content__header--options--icon" @click="setAnimation(); clear();" :class="{ animation__rotate: isRotating }"><use xlink:href="@/assets/sprites.svg#refresh-button"></use></svg>
                <svg v-if="loadReturn" class="content__header--options--icon" @click="goBack()"><use xlink:href="@/assets/sprites.svg#back-arrow"></use></svg>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return {
            isRotating: false
        }
    },
    computed: {
        title() {
            return this.$store.state.contentHeader.title
        },
        loadClear() {
            return this.$store.state.contentHeader.clear
        },
        loadReturn() {
            return this.$store.state.contentHeader.title
        }    
    },
    methods: {
        setAnimation(){ /* Como não conseguir animar o click usando apenas o CSS programei uma função simples */
            this.isRotating = true
            setTimeout(() => {
                this.isRotating = false
            }, 1000)
        },
        clear(){ // Função que emite o evento para limpar os dados do formulário
            // this.$store.commit('')
            console.log('implementar')
        },
        goBack() {
            /* window.history.back() - Isso bugará o "Active" da Sidebar. */
            console.log('implementar')
        }
    }
}
</script>

<style lang="scss" scoped>
.content__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgb(240, 240, 240);

    &--title {
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;
        color: #8a8a8a;
        margin-left: 2rem;
    }

    &--options {
        margin: 1rem;

        &--icon {
            height: 2.6rem;
            width: 2.6rem;
            fill: #8a8a8a;
            margin: 1rem;
            cursor: pointer;

            &:hover {
                fill: #0abde3;
            }
        }
    }
}


/* Animations */

.animation__rotate {
    animation: rotate;
    animation-duration: .5s;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

</style>