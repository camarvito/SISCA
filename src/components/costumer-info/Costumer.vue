<template>
  <div class="costumer__container">
    <!-- <div class="costumer__photo">
          <div class="costumer__photo--img"></div>
      </div> -->
    <div class="costumer__info">
      <div class="costumer__info--name">{{ costumer.name }}</div>
      <div class="costumer__info--box--container">
        <div class="costumer__info--box--container--left">
          <div class="costumer__info--personal">
            <strong>CPF: </strong>
          </div>
          <div class="costumer__info--personal">
            <strong>Telefone: </strong>
          </div>
          <div class="costumer__info--personal">
            <strong>Matricula: </strong>
          </div>
          <div class="costumer__info--personal">
            <strong>Curso: </strong>
          </div>
          <div class="costumer__info--personal">
            <strong>Situação: </strong>
          </div>
        </div>

        <div class="costumer__info--box--container--right">
          <div class="costumer__info--personal">
            {{ costumer.cpf }}
          </div>
          <div class="costumer__info--personal">
            {{ costumer.phone }}
          </div>
          <div class="costumer__info--personal">
            <span v-if="costumer.registry"> {{ costumer.registry }} </span
            ><span v-else>-------</span>
          </div>
          <div class="costumer__info--personal">
            <span v-if="costumer.course"> {{ costumer.course }} </span
            ><span v-else>-------</span>
          </div>
          <div class="costumer__info--personal">
            <!--Corrigir isso-->
            <span v-if="costumer.debits"> Há dividas pendentes </span
            ><span v-else>Não há dividas pendentes</span>
          </div>
        </div>
      </div>
    </div>
    <div class="costumer__debits">
      <TableDebits :debits="debits" />
      <!-- :debits="costumer.debits" -->
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import TableDebits from './table-debits/TableDebits.vue';

const {
  mapState: costumerDebitsState,
  mapActions: costumerDebitsActions,
} = createNamespacedHelpers('costumerDebits');

export default {
  components: { TableDebits },
  computed: {
    ...costumerDebitsState(['costumer', 'debits']),
  },
  methods: {
    ...costumerDebitsActions(['fetchDebits']),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchDebits(id);
  },
};
</script>

<style lang="scss" scoped>
.costumer {
  &__container {
    display: grid;
    grid-template-columns: 30% 1fr;
    padding: 2rem;
    gap: 1rem;
  }

  &__photo {
    grid-row: 1;
    grid-column: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;

    &--img {
      height: 18rem;
      width: 18rem;
      background-color: #f0f0f0;
      border-radius: 50%;
    }
  }

  &__info {
    grid-row: 1;
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    &--box {
      display: flex;
      flex-direction: column;

      &--container {
        display: flex;
        flex-direction: row;

        &--right {
          margin-left: 5rem;
          text-align: end;
        }

        &--left {
          text-align: start;
        }
      }
    }

    &--name {
      font-family: inherit;
      font-size: 2.5rem;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0.5rem;
    }

    &--personal {
      font-family: inherit;
      font-size: 1.6rem;
      font-weight: lighter;
      margin: 0.5rem;
    }
  }

  &__debits {
    grid-row: 2;
    grid-column: 1 / 3;
    margin: 1.2rem 0;
    padding: 1rem;
  }
}
</style>
