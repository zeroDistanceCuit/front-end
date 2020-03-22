<template>
  <div>
    <div style="margin:1% auto auto;width:80%;height:100%">
      <div style="height:20px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{shopInfo.Goods.Type}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{shopInfo.Goods.Name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
        <div style="float:left;margin-top:1%">
          <el-image style="width:420px;height:560px" :src="shopInfo.Goods.Img" />
        </div>
        <div style="width:50%;margin-top:1%;margin-left:450px">
          <div style="font-size:20px; text-align:left">
            <b>:{{shopInfo.Goods.Name}}</b>
          </div>
          <el-divider style="width:50%"></el-divider>
          <div style="text-align:left;font-size:16px">
            吊牌价：
            <span style="font-size:22px">
              <b>￥ {{shopInfo.Goods.Money}}</b>
            </span>
            <span style="color:red;font-size:14px;display:inline-block;margin-left:30px">登录立刻查看vip价格</span>
            <div>
              领
              <div style="display:inline-block;width:14px"></div>券：
              <el-image style="margin-top:5px" :src="require('../../assets/dazhe.jpg')"></el-image>
            </div>
          </div>
          <el-divider style="width:50%"></el-divider>
          <div style="text-align:left;font-size:16px">
            <div>
              颜
              <div style="display:inline-block;width:14px"></div>色：
              <el-button size="mini">黑色</el-button>
              <el-button size="mini">白色</el-button>
            </div>
            <div style="margin-top:10px">
              尺
              <div style="display:inline-block;width:14px"></div>码：
              <el-button size="mini">S</el-button>
              <el-button size="mini">M</el-button>
              <el-button size="mini" disabled>L</el-button>
              <el-button size="mini">XL</el-button>
            </div>
            <div style="margin-top:10px">
              数
              <div style="display:inline-block;width:14px"></div>量：
              <el-input-number
                v-model="num"
                size="mini"
                @change="numChange"
                :min="1"
                :max="shopInfo.Goods.Num"
              ></el-input-number>
            </div>
          </div>
          <el-divider style="width:50%"></el-divider>
          <div style="text-align:left;font-size:16px">
            <el-button type="danger" @click="addCart">
              <i class="fa fa-cart-arrow-down" />&nbsp;加入购物车
            </el-button>
            <el-button>
              <i class="fa fa-heart" />&nbsp;收藏商品
            </el-button>
            <div style="font-size:12px;margin-top:10px">
              服务说明:
              <div style="display:inline-block;width:10px" />
              <i class="fa fa-check-circle-o" style="color:red" />品牌保证
              <div style="display:inline-block;width:10px" />
              <i class="fa fa-check-circle-o" style="color:red" />支持七天退货
              <div style="display:inline-block;width:10px" />
              <span style="font-size:10px;color:red">更多</span>
            </div>
            <el-image style="margin-top:5px;width:190px" :src="require('../../assets/erweima.png')"></el-image>
          </div>
        </div>
      </div>
    </div>
    <el-image style="margin-top:5px;width:100%" :src="require('../../assets/underBg.jpg')"></el-image>
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