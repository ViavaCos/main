<template>
  <div class="layout">
    <div class="head">
      <div class="title">qiankun</div>
    </div>
    <div class="content">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/child-a/">child-home</router-link> |
        <router-link to="/child-a/about">child-about</router-link>
      </div>
      <router-view />

      <!-- 子应用容器 -->
      <div id="childContainer"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.head {
    display: flex;
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    background-color: pink;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>