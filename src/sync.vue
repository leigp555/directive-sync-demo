<template>
  <div class="money"><span>总共有</span>{{ totalMoney }}元
        <Child :money="totalMoney" v-on:update:money="totalMoney=$event" />
    <Child :money.sync="totalMoney"/>
  </div>
</template>
<script>
import Child from "./usemoney.vue"
export default {
  components:{Child},
  data(){
    return {
      totalMoney:1000000
    }
  }
}
</script>
<style scoped>
.money{
  display: inline-block;
  height: 100px;
  background-color: orange;
  overflow: hidden;
}
</style>