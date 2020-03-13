<template>
  <div style="margin-top:1.5%">
    <div class="block">
      <el-carousel style="width:80%;margin:0 auto" height="450px">
        <el-carousel-item v-for="item in lunboData" :key="item.id">
          <el-image v-on:click="shopInfo(item2)" :src="item.img" fit="contain"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { mainPage } from "./main-page";
export default {
  mixins: [mainPage]
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>