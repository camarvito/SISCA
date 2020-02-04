<template>
  <div>
    <div class="search__container">
      <input
        type="text"
        class="search__bar"
        placeholder="Digite o nome do cliente"
        v-model="searchKey"
      />
      <button class="search__bar__button">
        <svg class="search__bar__button--icon">
          <use xlink:href="@/assets/sprites.svg#magnifying-glass"></use>
        </svg>
      </button>
    </div>

    <div class="table__container">
      <table class="table__frame">
        <TableClientsHeader />
        <TableClientsRowErr v-if="!filteredUsers.length" />
        <TableClientsRow
          v-for="user in filteredUsers"
          :key="user.id"
          :name="user.name"
          :registry="user.registry"
          :cpf="user.cpf"
          :id="user.id"
        />
      </table>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import TableClientsHeader from './TableClientsHeader.vue';
import TableClientsRow from './TableClientsRow.vue';
import TableClientsRowErr from './TableClientsRowErr.vue';

const {
  mapState: costumersState,
  mapActions: costumersActions,
  mapGetters: costumersGetters,
} = createNamespacedHelpers('costumers');

export default {
  components: { TableClientsHeader, TableClientsRow, TableClientsRowErr },
  computed: {
    ...costumersGetters(['filteredUsers']),
    ...costumersState(['costumers', 'searchKey']),
    searchKey: {
      get() {
        return this.$store.state.costumers.searchKey;
      },
      set(value) {
        this.$store.commit('costumers/SET_SEARCH_KEY', value);
      },
    },
  },
  methods: {
    ...costumersActions(['fetchCostumers']),
  },
  mounted() {
    this.fetchCostumers();
    // this.$store.commit('contentHeader/changeContentHeader', {
    //   title: 'Buscar Cliente',
    //   loadClear: false,
    //   loadReturn: true,
    // });

    // Resolver esse problema
    // this.$store.state.costumers.loadedCostumers.forEach(costumer =>
    //   this.users.push(costumer)
    // );
  },
};
</script>

<style lang="scss" scoped>
.search {
  &__container {
    display: flex;
    box-sizing: border-box;
    padding: 2rem;
  }

  &__bar {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 2rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    text-transform: uppercase;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &::placeholder {
      font-weight: 100;
      text-transform: initial;
    }

    &__button {
      position: absolute;
      border: none;
      outline: none;
      background-color: transparent;
      right: 5rem;
      top: 17.7rem;

      &--icon {
        height: 2rem;
        width: 2rem;
        fill: #75797d;
      }
    }
  }
}

.table {
  &__container {
    padding: 2rem;
  }

  &__frame {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    border: 1px solid #dee2e6;
    border-collapse: collapse;
  }
}
</style>
