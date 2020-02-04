import gql from 'graphql-tag';
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
