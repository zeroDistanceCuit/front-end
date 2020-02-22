<template>
  <div class="nav-demo">
    <div class="img-block">
      <img class="img-logo" src="../../../../assets/logo.jpg" />
    </div>
    <div>
      <el-menu
        :default-active="activeIndex"
        class="nav-menu"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">订单管理</a>
        </el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import { Nav } from "./index";
export default {
  mixins: [Nav]
};
</script>

<style>
.nav-demo {
  height: 9.5%;
  width: 100%;
  position: fixed;
  top: 0px;
  background-color: white;
}
.img-block {
  width: 6.7%;
  /* float: left; */
}
.img-logo {
  height: 31px;
  margin-left: 10%;
  margin-top: 10%;
}
.nav-menu{

}
</style>