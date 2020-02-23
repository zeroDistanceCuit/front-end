<template>
  <div style="home-body">
    <el-container>
      <div class="nav-demo">
        <div class="img-block">
          <img class="img-logo" src="../../assets/logo.jpg" />
        </div>
      </div>
      <el-menu
        StaticEnableDefaultPopOutImage="false"
        :default-active="activeIndex"
        class="el-menu-demo nav-menu"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1" style="width:20px">男装</el-menu-item>
        <el-submenu index="2"  >
          <template slot="title">女装</template>
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
        <el-menu-item index="3"  style="width:40px">中古逸品</el-menu-item>
        <el-menu-item index="4"  style="width:40px">
          折扣商品
        </el-menu-item>
        <el-menu-item index="5"  style="width:20px">
          活动
        </el-menu-item>
      </el-menu>
    </el-container>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
import { homePage } from "./home-page";
export default {
  mixins: [homePage]
};
</script>

<style scoped>
* {
  margin: 0%;
  padding: 0%;
}
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
  box-shadow: unset;
  border-bottom: 0;
  /* heig */
}
.el-menu-item {
  font-size: 8px;
}
/* .menuHover {
  border: solid 1px green;
  text-decoration: none;
} */
.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: 1px solid black
}
</style>


<style>
.el-submenu__title {
  font-size: 8px !important;
}
/* .el-vertical__title {
  font-size: 10
} */
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{
  display: none !important
}

</style>