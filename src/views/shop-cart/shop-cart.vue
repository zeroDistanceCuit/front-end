<template>
  <div>
    <div style="width:750px;border:1px solid #dedede">
      <!-- order为订单编号时间生成器 -->
      <div style="width:100%;background:#e3e3e3;height:60px">
        <span style="display:inline-block;float:left;margin-left:20px;margin-top:17px">
          <b style="font-size:22px">我的购物车</b>&nbsp;&nbsp;
          <b>CART</b>
        </span>
      </div>
      <div style="width:98%;background:#faf6da;margin:10px auto;height:25px;line-height:25px">
        <span style="color:red">温馨提示：</span>1. 选购单中的商品不保留库存，请及时结算。 2. 商品的价格、相关活动信息及库存以订单提交时为准。
      </div>
      <div
        style="width:100%;background:#444444;margin:10px auto 0;height:30px;line-height:25px;color:white"
      >
        <span style="display:inline-block;width:35%;float:left">商品信息</span>
        <span style="display:inline-block;float:left;width:15%">单价</span>
        <span style="display:inline-block;float:left;width:22%">数量</span>
        <span style="display:inline-block;float:left;width:15%">小计</span>
        <span style="display:inline-block;float:left;width:13%">操作</span>
      </div>
      <div>
        <div v-for="(item,key) of cartList" :key="key">
          <div ref="cartInfo" style="width:100%;margin:0;height:120px;border:0.5px solid #e0e0e0 ">
            <el-image
              style="width:64px;height:85px;margin-left:10px;margin-top:17px;display:inline-block;float:left"
              :src="item.Shops.Goods.Img"
            />
            <div style="height:85px;width:150px;margin-left:95px;margin-top:17px;text-align:left">
              {{item.Shops.Goods.Name}}
              <div style="width:80%;height:20px;color:#9a9a9a;position:relative;top:20px">
                颜色: 黑色
                <span style="display:inline-block;width:10px" /> 尺码：L
              </div>
            </div>
            <div
              style="width:145px;height:85px;line-height:85px;margin-left:244px;margin-top:-85px"
            >￥{{item.Shops.Goods.Money}}</div>
            <div style="margin-top:-55px;margin-left:164px">
              <el-input-number
                v-model="item.Num"
                size="mini"
                @change="numChange"
                :min="1"
                :max="item.Shops.Nums"
                placeholder="5"
              ></el-input-number>
            </div>
            <div style="margin-top:-25px;color:red;margin-left:440px">
            ￥{{item.Num*item.Shops.Goods.Money }}
            </div>
            <div style="margin-top:-27px;color:red;margin-left:650px">
              <el-button type="text" @click="finishPay(key,item)">付款</el-button>
              <el-button type="text" @click="removeCart(key,item.Id)">移除</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { shopCart } from "./shop-cart";
export default {
  mixins: [shopCart]
};
</script>

<style>
</style>