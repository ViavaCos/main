<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted(){
    console.log('Main-store', this.$store);
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 350px;
  color: #ccc;
  /* background-color: lightgreen; */
}
h1{
  line-height: 300px;
  font-size: 150px;
}
</style>