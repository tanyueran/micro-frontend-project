<template>
  <div id="app">
    <nav>
      <router-link to="/">页面1</router-link>
      <router-link to="/a2">页面2</router-link>
    </nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'app1',
  }
</script>

<style scoped>
  #app {
    color: red;
    height: 100%;
  }

  nav {
    display: flex;
    height: 50px;
    line-height: 50px;
    justify-content: center;
    font-size: 18px;
    align-content: center;
  }

  nav > a {
    display: flex;
    padding: 0 20px;
    text-decoration: none;
    background-color: #efefef;
    margin-left: 10px;
  }

  nav > a:hover {
    background-color: #fff;
  }
</style>
