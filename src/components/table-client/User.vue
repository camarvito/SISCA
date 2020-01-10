<template>
  <div class="user__container">
      {{ id }}
  </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style lang="scss" scoped>
    .user {
        &__container {
            display: grid;
            grid-template-columns: 30% 1fr;
            grid-template-rows: 1fr 1fr;
        }
    }

</style>