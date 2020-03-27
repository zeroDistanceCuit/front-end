<template>
  <div>
    <div style="width:750px;border:1px solid #dedede">
      <!-- order为订单编号时间生成器 -->
      <div style="width:100%;background:#e3e3e3;height:60px">
        <span style="display:inline-block;float:left;margin-left:20px;margin-top:17px">
          <b style="font-size:22px">订单中心</b>&nbsp;&nbsp;
          <b>ORDER</b>
        </span>
      </div>
      <div style="width:98%;background:#faf6da;margin:10px auto;height:25px;line-height:25px">
        <span style="color:red">重要提醒：</span>近期假冒客服诈骗事件频发，有货不会以任何理由向您索取账户密码或引导转账。请您提高警惕，谨防诈骗。
      </div>
      <div>
        <div style="width:100%;background:#efefef;height:40px;text-align:left">
          <span style="display:inline-block;width:40%;margin-left:20px;height:40px;line-height:40px"> 
            <span style="display:inline-block;width:20px"></span>商品信息</span>
          <span style="display:inline-block;width:10%;height:40px;line-height:40px;text-align:center"> 单价（元）</span>
          <span style="display:inline-block;width:10%;height:40px;line-height:40px;text-align:center"> 数量</span>
          <span style="display:inline-block;width:15%;height:40px;line-height:40px;text-align:center"> 实付款（元）</span>
          <span style="display:inline-block;width:10%;height:40px;line-height:40px;text-align:center"> 订单状态</span>
          <span style="display:inline-block;width:10%;height:40px;line-height:40px;text-align:center"> 操作</span>
        </div>
        <div style="margin-top:10px" v-for="(item,key) of orderList" :key="key">
          <div class="order" style="width:95%;border:0.5px solid #e6e6e6;margin:10px auto;height:115px">
            <div style="width:100%;height:28px;background:#efefef;line-height:28px;text-align:left;font-size:10px">
              <span style="display:inline-block;width:10px"></span>订单编号：{{item.Order}}<span style="display:inline-block;width:20px"></span>下单时间：{{item.Time}}
            </div>
            <el-image
              style="width:64px;height:64px;margin-left:10px;margin-top:10px;display:inline-block;float:left"
              :src="item.Shops.Goods.Img"
            />
            <div style="height:85px;width:170px;margin-left:95px;margin-top:17px;text-align:left">
              {{item.Shops.Goods.Name}}
              <div style="width:80%;height:20px;color:#9a9a9a;position:relative;top:10px">
                颜色: 黑色
                <span style="display:inline-block;width:10px" /> 尺码：L
              </div>
            </div>
            <div
              style="width:145px;height:85px;line-height:85px;margin-left:260px;margin-top:-105px"
            >￥{{item.Shops.Goods.Money}}</div>
            <div style="margin-top:-45px;margin-left:124px;">{{item.Num}}</div>
            <el-divider direction="vertical" style="height:18em"></el-divider>
            <div style="margin-top:-55px;margin-left:300px">
            {{item.Num*item.Shops.Goods.Money }}
            <div style="color:#afb6bf">(免快递)</div>
            </div>
            <div style="margin-top:-25px;margin-left:500px;color:#afb6bf">
            交易成功
            </div>
            <div class="buxiangxiele">
            <el-divider direction="vertical"></el-divider>
            </div>
            <div class="kuaitule">
            <el-divider direction="vertical"></el-divider>
            </div>
            <div style="margin-top:-70px;color:red;margin-left:650px">
              <el-button size="mini" type="text" @click="removeCart(key,item.Id)">移除</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import { shopOrder } from "./shop-order";
export default {
  mixins: [shopOrder]
};
</script>

<style>
.order .el-divider--vertical{
height:7.1em !important;
margin-top: -51px;
margin-left:130px
}
.buxiangxiele .el-divider--vertical{
height:7.1em !important;
margin-top: -51px;
margin-left:330px
}
.kuaitule .el-divider--vertical{
height:7.1em !important;
margin-top: -101px;
margin-left:580px
}
</style>