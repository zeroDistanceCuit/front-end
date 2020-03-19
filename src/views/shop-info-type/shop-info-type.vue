<template>
  <div style="margin:1% auto auto;width:80%;height:100%">
    <div style="height:20px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">男装</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item  :to="{path:'/shopInfo/'+shopType}">{{shopType}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <div class="filter">
        价格：￥&nbsp;<el-input v-model="money1" size="mini" style="display:inline-block;width:40px"/>&nbsp;-&nbsp;<el-input size="mini" v-model="money2" style="margin-right：50px;width:40px;display:inline-block"/>
        <div style="display:inline-block;margin-left:20px">商家：&nbsp;<el-input v-model="shopName" size="mini" style="display:inline-block;width:90px"/></div>
      </div>

      <div v-for="(item,key) in shopsList" :key="key">
        <div>
          <img
      style="width: 100px; height: 100px"
      v-bind:src="item.Goods.Img"
      />
      {{item.Goods.Img}}
        </div>
      </div>
    </div>
    <!-- TODO 返回顶部，未测试 -->
    <!-- <img v-if="btnFlag" class="go-top" src="图片url" @click="backTop"> -->
  </div>
</template>
<script>
import { shopInfoType } from "./shop-info-type";
export default {
  mixins: [shopInfoType]
};
</script>


<style scoped>
.filter{
  position: absolute;
  right:10%;
  /* width:10%; */
  margin-top:1%
}
</style>