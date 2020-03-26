<template>
  <div style="width:60%;margin: 2% auto 0;">
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="fa fa-home fa-fw"></i>&nbsp;首页
        </el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="menu">
        <el-menu
          default-active="/self"
          router
          active-text-color="#010101"
          background-color="#f8f8f8"
        >
          <el-menu-item index="/self" style="height:auto">
            <div>
              <div style="width:230px;background:#e3e3e3;height:60px;text-align:left">
                <span slot="title" style="font-size:20px;display:inline-block;margin-left:10px">
                  <b style="display:inline-block;margin-left:5px">个人中心&nbsp;</b>
                  <span style="font-size:14px;display:inline-block;margin-top:10px">
                    <b>UCENTER</b>
                  </span>
                </span>
              </div>
              <div>
                <el-image
                  class="goutou"
                  style="margin-top:15px;margin-bottom:20px;"
                  :src="require('../../assets/goutou.jpg')"
                ></el-image>
              </div>
            </div>
          </el-menu-item>
          <el-menu-item>
            <div style="width:230px;background:#e3e3e3;height:60px;text-align:left">
              <span slot="title" style="font-size:18px;display:inline-block;margin-left:10px">
                <i class="fa fa-play-circle" />&nbsp;
                <b style="display:inline-block;margin-left:5px">交易管理</b>
              </span>
            </div>
          </el-menu-item>
          <el-menu-item index="/cart">
              <div style="width:230px;background:#f8f8f8;height:60px;text-align:left">
              <span slot="title" style="font-size:14px;display:inline-block;margin-left:10px">
                <span style="display:inline-block;margin-left:25px">我的购物车</span>
              </span>
            </div>
          </el-menu-item>
          <el-menu-item index="/order">
              <div style="width:230px;background:#f8f8f8;height:60px;text-align:left">
              <span slot="title" style="font-size:14px;display:inline-block;margin-left:10px">
                <span style="display:inline-block;margin-left:25px">我的订单</span>
              </span>
            </div>
          </el-menu-item>
          <el-menu-item>
            <div style="width:230px;background:#e3e3e3;height:60px;text-align:left">
              <span slot="title" style="font-size:18px;display:inline-block;margin-left:10px">
                <i class="fa fa-play-circle" />&nbsp;
                <b style="display:inline-block;margin-left:5px">服务中心</b>
              </span>
            </div>
          </el-menu-item>
           <el-menu-item>
              <div style="width:230px;background:#f8f8f8;height:60px;text-align:left">
              <span slot="title" style="font-size:14px;display:inline-block;margin-left:10px">
                <span style="display:inline-block;margin-left:25px">在线客服</span>
              </span>
            </div>
          </el-menu-item>
          <el-menu-item>
            <div style="width:230px;background:#e3e3e3;height:60px;text-align:left">
              <span slot="title" style="font-size:18px;display:inline-block;margin-left:10px">
                <i class="fa fa-play-circle" />&nbsp;
                <b style="display:inline-block;margin-left:5px">个人信息管理</b>
              </span>
            </div>
          </el-menu-item>
           <el-menu-item>
              <div style="width:230px;background:#f8f8f8;height:60px;text-align:left">
              <span slot="title" style="font-size:14px;display:inline-block;margin-left:10px">
                <span style="display:inline-block;margin-left:25px">账号安全</span>
              </span>
            </div>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div style="margin-left:240px;margin-top:10px">
      <router-view />
    </div>
  </div>
</template>

<script>
import { userAdmin } from "./user-admin";
export default {
  mixins: [userAdmin]
};
</script>

<style>
.goutou {
  -moz-box-shadow: 0 0 10px 10px #e3e3e3;
  -webkit-box-shadow: 0 0 10px 10px #e3e3e3;
  box-shadow: 0 0 10px 10px #e3e3e3;
}
.menu {
  float: left;
  margin-top: 1%;
  height: 600px;
  width: 230px;
}
.menu element.style {
  padding-left: 0 !important;
}
.menu .el-menu-item {
  padding: 0 !important;
}
</style>