<template>
  <div id="app">
    <button @click="change(1)">Add1</button>|<button @click="change(0)">minus1</button>
    <p v-for="(item, index) in getArr" :key="index">{{ item.data }}</p>
    <br>
    <button @click="change1(1)">Add2</button>|<button @click="change1(0)">minus2</button>
    <p v-for="(item, index) in getStrArr" :key="index + 'a'">{{ item }}</p>
    <br>
    <button @click="change2(1)">Add3</button>|<button @click="change2(0)">minus3</button>
    <p>{{ getStr }}</p>
    <button @click="log">log</button>
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
    ...mapGetters(["getArr", "getStrArr", "getStr"])
  },
  methods:{
    ...mapActions({ setArr: "setArr", setStrArr: "setStrArr", setStr: "setStr" }),
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
    },
    change1(isAdd){
      let oldData = this.getStrArr
      if(isAdd){
        const data = 'aaa' + Math.round(Math.random() * 100)
        // get a new Arr
        oldData = oldData.filter(item => item !== 0)
        this.setStrArr([...oldData, data])
        return
      }

      oldData = oldData.filter(item => item !== oldData[oldData.length - 1])
      this.setStrArr(oldData)
    },
    change2(isAdd){
      if(isAdd){
        const data = 'aaa' + Math.round(Math.random() * 100)
        this.setStr(data)
        return
      }
      this.setStr('')
    },
    log(){
      // console.log(this.$store.getters.getArr);
      console.log(this.getArr);
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
