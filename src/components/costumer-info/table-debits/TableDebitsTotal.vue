<template>
  <tr class="table__body--row--total">
    <td class="table__body--row--cell">Total</td>
    <td class="table__body--row--cell"></td>
    <td class="table__body--row--cell"></td>
    <td class="table__body--row--cell"></td>
    <td class="table__body--row--cell">{{ accountTotal | toMoney }}</td>
  </tr>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters: costumerDebitsGetters } = createNamespacedHelpers(
  'costumerDebits'
);
export default {
  computed: {
    ...costumerDebitsGetters(['accountTotal']),
  },
};
</script>

<style lang="scss" scoped>
.table__body--row {
  &--total {
    background-color: #353b48;
  }

  &--cell {
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    padding: 1.4rem;
    color: #fff;
  }
}
</style>
