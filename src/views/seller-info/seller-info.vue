<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix" style="float:left;margin-top:-5px">
        <i class="fa fa-user-circle-o" style="color:#22a7f0"></i><span style="dispaly:inline-block;margin-left:10px">个人信息</span>
      </div>
      <div style="width:50%;margin: 0 auto">
        <img src="../../assets/tou.png" style="width:100%;border-radius:120px">
      </div>
      <div style="width:100%;margin-top:50px">
        <el-row>
          <el-col :span="10">
            <div>
              <span class="fontStyle">店主：</span>{{username}}
            </div>
          </el-col>
          <el-col :span="4">
            <div>
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <span class="fontStyle">商店名称：</span>{{shopName}}
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <span class="fontStyle">等级：</span>
              <i class="fa fa-star" style="color:#ffe700"/>
              <i class="fa fa-star" style="color:#ffe700"/>
              <i class="fa fa-star" style="color:#ffe700"/>
              <i class="fa fa-star-half" style="color:#ffe700"/>
            </div>
          </el-col>
          <el-col :span="4">
            <div>
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <span class="fontStyle">开店时间：</span>
              2020年2月2日
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <span class="fontStyle">电话：</span>
              <i class="fa fa-spinner fa-pulse"></i>
            </div>
          </el-col>
          <el-col :span="4">
            <div>
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <!-- <span class="fontStyle">手机号：</span>
              {{}} -->
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card" style="position:relative;left:520px;top:-430px;width:42%">
      <div slot="header" class="clearfix" style="float:left;margin-top:-5px">
        <i class="fa fa-list-alt" style="color:#22a7f0"></i><span style="dispaly:inline-block;margin-left:10px">销售业绩</span>
      </div>
      <div>
          <!-- TODO 计算商家销售业绩 -->
        <el-table :data="tableData" max-height="355" stripe style="width: 100%">
          <el-table-column prop="time" label="时间" width="200">
          </el-table-column>
          <el-table-column prop="sum" label="销售量">
          </el-table-column>
          <el-table-column prop="money" label="成交金额">
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>
<script>
  import {
    sellerInfo
  } from './seller-info'
  export default {
    mixins: [sellerInfo]
  }
</script>
<style>
  .fontStyle {
    /* font-color: #141522, */
    display: inline-block;
    margin-top: 10px;
    font-size: 12px;
    color: rgb(110, 105, 116)
  }

  .text {
    font-size: 14px;
  }

  

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>