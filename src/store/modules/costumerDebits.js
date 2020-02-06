import gql from 'graphql-tag';
import apollo from '@/plugins/graphql';

const state = {
  name: '',
  price: '',
  costumer: {
    id: '',
    name: '',
    cpf: '',
    phone: '',
    type: '',
    registry: '',
    course: '',
  },
  debits: [],
};

const mutations = {
  SET_COSTUMER(state, payload) {
    state.costumer = payload;
  },
  SET_DEBITS(state, payload) {
    state.debits = payload;
  },
  SET_NEW_DEBIT(state, payload) {
    state.debits.push(payload);
  },
  ALTER_DEBIT(state, payload) {
    state.debits = state.debits.map(debit => {
      if (payload.id === debit.id) {
        debit.isPaid = payload.isPaid;
        console.log('alter');
      }

      return debit;
    });
  },
};

const actions = {
  async fetchDebits({ commit }, payload) {
    const { data } = await apollo.query({
      query: gql`
        query($id: ID!) {
          costumer(filter: { id: $id }) {
            id
            name
            cpf
            phone
            type
            registry
            course

            debits {
              id
              name
              price
              date
              isPaid
            }
          }
        }
      `,
      variables: {
        id: payload,
      },
    });
    const { debits, __typename, ...costumer } = data.costumer;
    commit('SET_DEBITS', debits);
    commit('SET_COSTUMER', costumer);

    // console.log('debits', data.costumer);
  },
  async storeDebit({ commit }, payload) {
    const { data } = await apollo.mutate({
      mutation: gql`
        mutation(
          $costumerId: ID!
          $name: String!
          $price: Float!
          $date: Date!
          $isPaid: Boolean!
        ) {
          newDebit(
            data: {
              costumerId: $costumerId
              name: $name
              price: $price
              date: $date
              isPaid: $isPaid
            }
          ) {
            id
            name
            price
            date
            isPaid
          }
        }
      `,
      variables: {
        costumerId: payload.costumerId,
        name: payload.name,
        price: payload.price,
        date: payload.date,
        isPaid: payload.isPaid
      },
    });

    commit('SET_NEW_DEBIT', data.newDebit);
  },
  async changePayState({ commit }, payload) {
    const { data } = await apollo.mutate({
      mutation: gql`
        mutation($id: ID!, $isPaid: Boolean!) {
          changeDebit(filter: { id: $id }, data: { isPaid: $isPaid }) {
            id
            name
            price
            date
            isPaid
          }
        }
      `,
      variables: {
        ...payload,
      },
    });

    commit('ALTER_DEBIT', data.changeDebit);
  },
};

const getters = {
  accountTotal(state) {
    return state.debits.reduce((total, debit) => total + debit.price, 0);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
