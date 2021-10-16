<template>
  <div>
    <ol>
      <li v-for="(item,index) in obj" :key="index">{{ index }}-{{ item }}</li>
    </ol>
    <ul>
      <li v-for="(u,index) in array" :key="index" >{{index}}--{{u}}</li>
    </ul>
    <ol>
      <li v-for="(x,index) in arr" :key="index">{{index}}+++{{x}}</li>
    </ol>
    <button v-pre >{{n}}</button>
    <hr>
    <a v-bind:href="'https://baidu.com'" :style="{textDecoration:'none',color:'red'}" v-on:click.prevent="">link</a>
    <hr>
    <img :src="'baidu.com'" alt="图片">
    <hr>
    <button @click="add">{{n}}</button>
    <hr>
    <div v-if="n<15" >{{n}}</div>
    <hr>
    <div v-show="n%2===0">整数显示</div>
    <hr>
    <input type="text" @input="y">
    <hr>
    <input type="text" @keypress="d">
    <hr>
    <input type="text" @keypress.13="d">
<!--    eventBus-->
    <hr>
    <div class="money"><span>总共有</span>{{totalMoney}}元
<!--    <Child :money="totalMoney" v-on:update:money="totalMoney=$event" />-->
      <Child :money.sync="totalMoney" />
    </div>
  </div>
</template>
<script>
import Child from "./usemoney"
export default {
  components:{Child},
  data() {
    return {
      obj: {
        name: "fang",
        xName: "Tom",
        age:18,
        gender:"female"
      },
      array:[1,2,3,4,5],
      arr:[{name:"fang"},{age:23},{gender:"male"}],
      n:4,
      totalMoney:1000000
    }

  },
  methods:{
    add(){
      this.n+=3
    },
    y(e){
      console.log(e.target.value)
    },
    d(e){
      console.log(e)
      if(e.keyCode===13){
        console.log("用户打了回车")
      }
    }
  }
}
</script>

<style scoped>
.money{
  height: 100px;
  border: 3px solid red;
  background-color: orange;
  overflow: hidden;
}
</style>