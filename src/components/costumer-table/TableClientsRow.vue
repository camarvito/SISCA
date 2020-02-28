<template>
  <tbody>
    <tr class="table__body--row">
      <router-link
        tag="td"
        class="table__body--cell"
        :to="{ name: 'costumers', params: { id } }"
        >{{ name }}</router-link
      >
      <router-link
        tag="td"
        class="table__body--cell"
        :to="{ name: 'costumers', params: { id } }"
      >
        <span v-if="registry">{{ registry }}</span>
        <span v-else>---------</span>
      </router-link>
      <router-link
        tag="td"
        class="table__body--cell"
        :to="{ name: 'costumers', params: { id } }"
        >{{ cpf }}</router-link
      >
      <td class="table__body--cell">
        <button class="btn btn--include">
          Cadastrar novo débito
        </button>
      </td>
      <td class="table__body--cell">
        <button class="btn btn--exclude" @click="deleteCostumer">
          <svg class="btn--icon">
            <use xlink:href="@/assets/sprites.svg#bin"></use>
          </svg>
        </button>
        <button class="btn btn--edit">
          <svg class="btn--icon">
            <use xlink:href="@/assets/sprites.svg#pencil-edit-button"></use>
          </svg>
        </button>
      </td>
    </tr>
  </tbody>
</template>

<script>
import gql from 'graphql-tag';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    registry: {
      type: String,
    },
  },
  methods: {
    deleteCostumer() {
      console.log(this.id);
      this.$api
        .mutate({
          mutation: gql`
            mutation($id: ID!) {
              deleteCostumer(filter: { id: $id }) {
                id
                name
                cpf
                phone
                type
              }
            }
          `,
          variables: {
            id: this.id,
          },
        })
        .then(resultado => {
          console.log(resultado);
        })
        .catch(e => console.log(e));
    },
  },
};
</script>

<style lang="scss" scoped>
.table__body {
  &--row {
    display: table-row;
    cursor: pointer;

    &:hover {
      background-color: #3498db28;
    }
  }

  &--cell {
    display: table-cell;
    width: 20%;
    font-size: 1.2rem;
    font-weight: lighter;
    text-align: initial;
    border: 1px solid #dee2e6;
    padding: 1rem;
  }
}

.btn {
  display: inline-block;
  border: 1px solid transparent;
  padding: 0.7rem 0.7rem;
  margin: 0 0.5rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s;
  cursor: pointer;

  &--icon {
    vertical-align: middle;
    height: 1.6rem;
    width: 1.6rem;
    fill: #fff;
  }

  &--include {
    background-color: #2ecc71;
    box-shadow: 0px 0px 2px 0.2px rgba(0, 0, 0, 0.35);
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
  }

  &--exclude {
    vertical-align: middle;
    background-color: #e74c3c;
    box-shadow: 0px 0px 2px 0.2px rgba(0, 0, 0, 0.35);
  }

  &--edit {
    vertical-align: middle;
    background-color: #f1c40f;
    box-shadow: 0px 0px 2px 0.2px rgba(0, 0, 0, 0.35);
  }
}
</style>
