<template>
  <div class="about">
    <h1 class="fa fa-camera-retro fa-lg">This is an about page</h1>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="warning" @click="handler">警告按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },

  methods: {
    handler() {
      console.log("dsjhaajhdns");
      let params = {
        name: "pangagou",
        phone: "1383838438",
        sex: "man",
        address: "宁夏甘肃"
      };
      this.POST("/api/user/register", params).then(res=>{
        console.log(res)
      }).catch(e=>{
        console.log(e)
      })
      this.GET('/api/test/findAll').then(res=>{
        console.log(res)
      }).catch(e=>{
        console.log(e)
      })
    }
  }
};
</script>
