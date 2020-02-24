<template>
  <div>
    <el-container>
      <el-aside width="50%">
        <el-image style="margin-bottom:-4px" :src="require('../../assets/login.jpg')"></el-image>
      </el-aside>

      <el-main width="50%">
        <el-image style="margin-left:-80%" :src="require('../../assets/subscribe-grlogo.png')"></el-image>
        <div style="color:#000000;margin-left:-50%;margin-top:5%">
          @author::Merlynr&nbsp;&nbsp;
          <el-link :underline="false" href="https://blog.fanyan.vip/" target="_blank">BOLG</el-link>
        </div>
        <el-tabs style="margin-top:5%" v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="登录" name="login">
            <el-form label-position="left" :model="loginForm" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="loginForm.userName"></el-input>
              </el-form-item>
              <el-form-item label="角色">
                <el-select style="margin-left:-15%" v-model="loginForm.role" placeholder="请选择登录者角色">
                  <el-option label="买家" value="buyer"></el-option>
                  <el-option label="卖家" value="sell"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="密码">
                <el-input show-password v-model="loginForm.password"></el-input>
              </el-form-item>
              <el-form-item style="margin-left:-20%;margin-top:20%">
                <el-button type="primary" @click="onSubmitLogin">登录</el-button>
                <el-button style="margin-left:15%" @click="closeDialog">取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <el-form
              :rules="rules"
              status-icon
              label-position="left"
              :model="registerForm"
              label-width="80px"
              style="margin-bottom:-5%"
            >
              <el-form-item label="用户名">
                <el-input v-model="registerForm.userName"></el-input>
              </el-form-item>
              <el-form-item style="margin-top:-3%" label="角色">
                <el-select
                  style="margin-left:-15%"
                  v-model="registerForm.role"
                  placeholder="请选择登录者角色"
                >
                  <el-option label="买家" value="buyer"></el-option>
                  <el-option label="卖家" value="sell"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin-top:-3%" label="密码" prop="pass">
                <el-input type="password" v-model="registerForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item style="margin-top:-3%" label="确认密码" prop="checkPass">
                <el-input type="password" v-model="registerForm.checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item :style="{'display':(registerForm.role == 'buyer'?'':'none')}" style="margin-top:-3%;z-index:1" label="性别">
                <el-radio style="margin-left:-40%" v-model="registerForm.sex" label="man">男</el-radio>
                <el-radio v-model="registerForm.sex" label="woman">女</el-radio>
              </el-form-item>
              <el-form-item :style="{'display':(registerForm.role == 'sell'?'':'none')}" style="margin-top:-3%;z-index:999" label="店名">
                <el-input v-model="registerForm.shopName"></el-input>
              </el-form-item>
              <el-form-item style="margin-left:-20%;margin-top:-3%;">
                <el-button type="primary" @click="onSubmitRegister">注册</el-button>
                <el-button style="margin-left:15%" @click="closeDialog">取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { loginModel } from "./login-model";
export default {
  mixins: [loginModel]
};
</script>

<style>
.el-dialog__header {
  padding: 0 !important;
}
.el-dialog__body {
  padding: 0 !important;
}
.el-tabs__item.is-active {
  color: black !important;
}
.el-tabs__item:hover {
  color: black !important;
}
</style>