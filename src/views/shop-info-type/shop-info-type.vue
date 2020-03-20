<template>
  <div style="margin:1% auto auto;width:80%;height:100%">
    <div style="height:20px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <!-- TODO 未同步处理 -->
          <a href="/">男装</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/shopInfo/'+shopType}">{{shopType}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <!-- TODO 未进行处理 -->
      <div class="filter">
        价格：￥&nbsp;
        <el-input v-model="money1" size="mini" style="display:inline-block;width:40px" />&nbsp;-&nbsp;
        <el-input
          size="mini"
          v-model="money2"
          style="margin-right：50px;width:40px;display:inline-block"
        />
        <div style="display:inline-block;margin-left:20px">
          商家：&nbsp;
          <el-input v-model="shopName" size="mini" style="width:90px" />
        </div>
      </div>

      <div style="height:50px" />
      <div v-for="(item,key) in shopsList" :key="key" style="margin-left:10%">
        <div
          style="display:inline-block;width:235px;height:355px;float:left;margin-left:1%;margin-top:3%"
          @click="openShopInfo(item)"
        >
          <el-image style="width:235px;height:315px;" :src="item.Goods.Img" />
          <span style="display:block;">{{item.Goods.Name}}</span>
          <span style="display:block;float:left;margin-left:20px">店：{{item.Bussiness.ShopName}}</span>
          <span style="display:block;float:right;margin-right:20px">￥：{{item.Goods.Money}}</span>
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
.filter {
  position: absolute;
  right: 10%;
  /* width:10%; */
  margin-top: 1%;
}
</style>