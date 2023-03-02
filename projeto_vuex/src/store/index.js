import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    decrement(state){
      state.counter++
    },
    increment(state){
      state.counter--
    }
  },
  getters: {
    counter: (state) => state.counter,
    multiply: (state) => state.counter * 2,
  },
  actions: {
    decrement: ({ commit }) => commit("decrement"),
    increment: ({ commit }) => commit("increment"),
  },
});
