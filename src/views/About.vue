<template>
  <div class="about">
    <h1 class="fa fa-camera-retro fa-lg">This is an about page</h1>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
export default {
  data(){
    return{
      input:''
    }
  }
}
</script>
