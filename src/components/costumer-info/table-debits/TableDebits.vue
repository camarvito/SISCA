<template>
  <table class="table__frame">
    <thead>
      <TableDebitsHeader />
    </thead>
    <tbody>
      <TableDebitsRow
        v-for="(debit, index) in debits"
        :key="debit.id"
        :index="index"
        :debit="debit"
      />
      <TableDebitsTotal />
      <TableDebitsInput />
    </tbody>
  </table>
</template>

<script>
// import gql from 'graphql-tag'

import TableDebitsHeader from './TableDebitsHeader.vue';
import TableDebitsRow from './TableDebitsRow.vue';
import TableDebitsInput from './TableDebitsInput.vue';
import TableDebitsTotal from './TableDebitsTotal.vue';

export default {
  props: {
    debits: {
      type: Array,
      required: false,
    },
  },
  components: {
    TableDebitsHeader,
    TableDebitsRow,
    TableDebitsInput,
    TableDebitsTotal,
  },
  data() {
    return {
      userId: this.$route.params.id,
    };
  },
  computed: {
    isInputEnable() {
      if (
        this.$store.state.tableDebits.currentState == 1 ||
        this.$store.state.tableDebits.currentState == 2
      ) {
        return true;
      }
      return false;
    },
    getDebits() {
      const prices = [];

      if (!this.debits) {
        return prices;
      }
      this.debits.forEach(debit => {
        prices.push(debit.price);
      });

      return prices;
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
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

.uppercase {
  // font-weight: bold;
  text-transform: uppercase;
}
</style>
