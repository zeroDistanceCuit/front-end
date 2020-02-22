<template>
  <div class="nav-demo">
    <div class="img-block">
      <img class="img-logo" src="../../../../assets/logo.jpg" />
    </div>
    <div>
      <el-menu
        router
        :default-active="activeIndex"
        class="el-menu-demo nav-menu"
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
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">
          订单管理
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { Nav } from "./index";
export default {
  mixins: [Nav]
};
</script>

<style scoped>
.nav-demo {
  height: 9.5%;
  width: 100%;
  position: fixed;
  top: 0px;
  background-color: white;
}
.img-block {
  width: 6.7%;
}
.img-logo {
  height: 31px;
  margin-left: 10%;
  margin-top: 10%;
}
.nav-menu {
  width: 40%;
}
.el-menu-demo:not(.el-menu--collapse) {
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 10%;
  width: 40%;
  height: 100%;
  font-size: 14px;
  /* min-height: 400px; */
}
.el-menu-item  {
  font-size: 10px
}
.el-submenu__title{
  font-size: 10px
}
.menuHover { border : solid 1px green; text-decoration : none; }    

</style>