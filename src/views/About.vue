<template>
  <div class="about">
    <h1 class="fa fa-camera-retro fa-lg">This is an about page</h1>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="warning" @click="handler">警告按钮</el-button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      input: ""
    };
  },
  created(){
this.handler()
console.log(this.storage.getItem("token"))
  },

  methods: {
    handler() {
      console.log("dsjhaajhdns");
      
      // this.POST('/api/user/login',params).then(res=>{
      //   console.log(res)
      // }).catch(e=>{
      //   console.log(e)
      // })
      this.GET('/api/user/findAll').then(res=>{
        console.log(res)
console.log(this.storage.getItem("token"))

      }).catch(e=>{
        console.log(e)
      })
    }
  }
};
</script>
