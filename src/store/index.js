import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    arr: [ { count: 1, data: "原始数据" } ],
  },
  mutations: {
    setArr(state, data) {
      state.arr = data;
    },
  },
  actions: {
    setArr(context, data) {
      context.commit("setArr", data);
    },
  },
  modules: {},
  getters: {
    getArr(state) {
      return state.arr;
    },
  },
});
