<template>
  <div id="app">
    <button @click="change(1)">Add</button>|<button @click="change(0)">minus</button>
    <p v-for="(item, index) in getArr" :key="index">{{ item.data }}</p>
    <layout />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    layout: () => import("@/components/Layout"),
  },
    computed:{
    ...mapGetters(["getArr"])
  },
  methods:{
    ...mapActions({ setArr: "setArr" }),
    change(isAdd){
      let oldData = this.getArr
      if(isAdd){
        const data = {
          count: oldData.length + 1,
          data: 'aaa' + Math.round(Math.random() * 100)
        }
        // get a new Arr
        oldData = oldData.filter(item => item !== 0)
        this.setArr([...oldData, data])
        return
      }

      oldData = oldData.filter(item => item !== oldData[oldData.length - 1])
      this.setArr(oldData)
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
