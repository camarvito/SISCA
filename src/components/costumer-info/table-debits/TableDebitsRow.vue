<template>
  <tr
    class="table__body--row"
    :class="{
      even: this.index % 2 == 0,
      odd: this.index % 2 != 0,
      'table__body--row--paid': debit.isPaid,
    }"
  >
    <td class="table__body--row--cell">{{ debit.date }}</td>
    <td class="table__body--row--cell">{{ debit.name }}</td>
    <td class="table__body--row--cell">R$ {{ debit.price.toFixed(2) }}</td>
    <td class="table__body--row--cell">
      <span v-show="debit.isPaid">Pago</span>
      <span v-show="!debit.isPaid">Não pago</span>
    </td>
    <td class="table__body--row--cell">
      <button
        class="btn btn--pay"
        :class="{ 'btn--paid': debit.isPaid }"
        @click="changePayState({ id: debit.id, isPaid: !debit.isPaid })"
      >
        <svg class="icon">
          <use xlink:href="@/assets/sprites.svg#dollar-symbol"></use>
        </svg>
      </button>
      <button class="btn btn--exclude">
        <svg class="icon">
          <use xlink:href="@/assets/sprites.svg#bin"></use>
        </svg>
      </button>
    </td>
  </tr>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions: costumerDebitsActions } = createNamespacedHelpers(
  'costumerDebits'
);

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    debit: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {
    ...costumerDebitsActions(['changePayState']),
  },
};
</script>

<style lang="scss" scoped>
.table__body {
  &--row {
    &--cell {
      width: 20%;
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      padding: 1.4rem;
      color: inherit;
    }

    &--paid {
      background-color: rgb(46, 204, 113) !important;
      color: #fff !important;
    }
  }
}

.odd {
  background-color: #ddd;
}

.even {
  background-color: #eee;
}

.btn {
  display: inline-block;
  border: 1px solid transparent;
  padding: 0.7rem 0.7rem;
  margin: 0 0.5rem;
  border-radius: 0.25rem;
  transition: color 0.15s;
  cursor: pointer;

  &--pay {
    background-color: rgb(46, 204, 113);
    box-shadow: 0px 0px 2px 0.2px rgba(0, 0, 0, 0.35);
    outline: none;

    &:active {
      background-color: rgb(16, 174, 83);
    }
  }

  &--exclude {
    background-color: #e74c3c;
    box-shadow: 0px 0px 2px 0.2px rgba(0, 0, 0, 0.35);
    outline: none;

    &:active {
      background-color: rgb(201, 46, 30);
    }
  }

  &--paid {
    background-color: rgb(169, 175, 179);
    box-shadow: 0px 0px 2px 0.2px rgba(0, 0, 0, 0.35);
    outline: none;

    &:active {
      background-color: rgb(139, 145, 149);
    }
  }
}

.icon {
  height: 1.3rem;
  width: 1.3rem;
  fill: #fff;
}
</style>
