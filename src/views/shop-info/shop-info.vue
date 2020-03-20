<template>
  <div style="margin:1% auto auto;width:80%;height:100%">
    <div style="height:20px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          {{shopInfo.Goods.Type}}
        </el-breadcrumb-item>
        <el-breadcrumb-item >{{shopInfo.Goods.Name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import { shopInfo } from "./shop-info";
export default {
  mixins: [shopInfo]
};
</script>

<style>
</style>