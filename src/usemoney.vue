<template>
  <div class="child">
    父组件有{{money}}元
    <hr>
    <button @click="$emit('update:money',money-200)"> 花钱 </button>
  </div>
</template>
<script>
export default {
  props:["money"]
}
</script>
<style scoped>
.child{
  height: 100%;
    background-color: green;

}
</style>