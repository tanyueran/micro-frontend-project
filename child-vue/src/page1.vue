<template>
  <div class="box">
    <Button @click="showHandler">click me</Button>
  </div>
</template>

<script>
  import {Button, MessageBox} from 'element-ui'

  export default {
    name: "a1",
    components: {
      Button
    },
    methods: {
      showHandler() {
        MessageBox.alert('你好吗？', 'element-ui', {})
      }
    }
  }
</script>

<style scoped>

  .box {
    text-align: center;
    margin-top: 20px;
  }
</style>