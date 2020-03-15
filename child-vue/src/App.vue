<template>
  <div id="app">
    <div>
      <router-link to="/">a1</router-link>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <router-link to="/a2">a2</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'app1',
    components: {},
    created() {
      console.log('=====================================')
    }
  }
</script>

<style scoped>
  #app {
    color: red;
    height: 100%;
    border: 1px solid #333;
  }
</style>
