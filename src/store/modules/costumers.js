import gql from 'graphql-tag';
import router from '@/router';
import apollo from '@/plugins/graphql';

const state = {
  searchKey: '',
  costumers: [],
};

const mutations = {
  SET_COSTUMERS(state, payload) {
    state.costumers = payload;
  },
  SET_SEARCH_KEY(state, payload) {
    state.searchKey = payload;
  },
  SET_NEW_COSTUMER(state, payload) {
    state.costumers.push(payload);
  },
};

const actions = {
  async fetchCostumers({ commit }) {
    const { data } = await apollo.query({
      query: gql`
        {
          costumers {
            id
            name
            cpf
            phone
            type
            registry
            course
          }
        }
      `,
    });

    commit('SET_COSTUMERS', data.costumers);
  },

  async storeCostumer({ commit }, payload) {
    const { data } = await apollo.mutate({
      mutation: gql`
        mutation(
          $name: String!
          $cpf: String!
          $phone: String!
          $type: String!
          $registry: String
          $course: String
        ) {
          newCostumer(
            data: {
              name: $name
              cpf: $cpf
              phone: $phone
              type: $type
              registry: $registry
              course: $course
            }
          ) {
            id
            name
            cpf
            phone
            type
            registry
            course
          }
        }
      `,
      variables: {
        ...payload,
      },
    });

    commit('SET_NEW_COSTUMER', data.newCostumer);
    router.push({ name: 'busca-cliente' });
  },
};

const getters = {
  filteredUsers(state) {
    return state.costumers.filter(
      user => user.name.toLowerCase().startsWith(state.searchKey.toLowerCase())
      // if (!this.inputName) {
      //     return false
      // } else {
      // }
    );
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
