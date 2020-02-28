<template>
  <section>
    <Header />
    <main class="main__layout">
      <Sidebar @itemSelected="itemSelected($event)" />
      <div class="content">
        <ContentHeader />
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
      </div>
    </main>
  </section>
</template>

<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';

import ContentHeader from '@/components/content/ContentHeader.vue';

export default {
  name: 'Dashboard',
  components: {
    Header,
    Sidebar,
    ContentHeader,
  },
};
</script>


<style lang="scss">
.main {
  &__layout {
    display: grid;
    grid-template-columns: 20% 1fr;
    height: 100vh;
  }
}

.content {
  grid-row: 1;
  grid-column: 2;
  background-color: #fff;
  margin: 2rem; /* Corrigir isso depois com a propriedade gap*/
  height: auto;
  display: inline-table;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}

.slide-leave-active {
  animation: slide-out 0.3s ease;
}
</style>
