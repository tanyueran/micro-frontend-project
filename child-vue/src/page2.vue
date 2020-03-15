<template>
  <div class="box">
    <Card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </Card>
  </div>
</template>

<script>
  import {Card} from 'element-ui'

  export default {
    name: "a2",
    components: {
      Card,
    }
  }
</script>

<style scoped>
  .box {
    text-align: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    margin: 20px auto;
    width: 300px;
  }
</style>