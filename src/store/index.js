import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function logWrap(value){
  console.log('getters trigger~~~');
  return value
}

export default new Vuex.Store({
  state: {
    arr: [ { count: 1, data: "对象数组" } ],
    strArr: ['字符串数组'],
    str: '字符串'
  },
  mutations: {
    setArr(state, data) {
      state.arr = data;
    },
    setStrArr(state, data) {
      state.strArr = data;
    },
    setStr(state, data) {
      state.str = data;
    },
  },
  actions: {
    setArr(context, data) {
      context.commit("setArr", data);
    },
    setStrArr(context, data) {
      context.commit("setStrArr", data);
    },
    setStr(context, data) {
      context.commit("setStr", data);
    }
  },
  modules: {},
  getters: {
    getArr: state => logWrap(state.arr),
    getStrArr: state => logWrap(state.strArr),
    getStr: state => logWrap(state.str),
  },
});
