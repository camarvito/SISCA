export default (array, { action, base }) => {
  const form = {};
  for (let item of array) {
    form[item] = {
      get() {
        return this.$store.state[base][item];
      },
      set(value) {
        this.$store.commit(action, { [item]: value });
      },
    };
  }

  return form;
};
