export default {
  namespaced: true,
  state: {
    isAlertVisible: false,
  },
  mutations: {
    showAlert(state) {
      state.isAlertVisible = true;
      setTimeout(() => {
        state.isAlertVisible = false;
      }, 4000);
    },
  },
  actions: {},
};
