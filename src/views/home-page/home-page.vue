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
        text-color="#19241c"
      >
        <el-submenu index="1">
          <template slot="title">男装</template>
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
        <el-submenu index="2" style="margin-left:-15px">
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
        <el-submenu index="3" style="margin-left:-15px">
          <template slot="title">童装</template>
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
        <el-submenu index="4" style="margin-left:-15px">
          <template slot="title">中古逸品</template>
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
        <el-submenu index="5" style="margin-left:-15px">
          <template slot="title">折扣商品</template>
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
        <el-submenu index="6" style="margin-left:-15px">
          <template slot="title">活动</template>
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
      </el-menu>

      <div class="nav-right">
        <el-input @keyup.enter.native="search($event)" style="width:38%;margin-top:2%" v-model="input" suffix-icon="el-input__icon el-icon-search" placeholder="搜索"></el-input>
      </div>
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

.nav-right {
  border: 1px solid red;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 9.5%;
}
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
  height: 50px;
  margin-left: 10%;
  margin-top: 10%;
}
.nav-menu {
  width: 40%;
  margin-top: -5px;
}
.el-menu-demo:not(.el-menu--collapse) {
  position: absolute;
  left: 0;
  top: 15px;
  margin-left: 10%;
  width: 40%;
  box-shadow: unset;
  border-bottom: 0;
  /* heig */
}
.el-menu-item {
  font-size: 12px;
  border-bottom: 0;
}
/* .menuHover {
  border: solid 1px green;
  text-decoration: none;
} */
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 1px solid black;
}
</style>


<style>
.el-input.is-active .el-input__inner, .el-input__inner:focus{
  border-color:black !important;
}
.el-input__inner{
  border-radius:0px !important
}
.el-submenu__title {
  font-size: 12px !important;
}
/* .el-vertical__title {
  font-size: 10
} */
.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  display: none !important;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 0px !important;
}
</style>