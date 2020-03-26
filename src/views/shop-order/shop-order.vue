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
        <div>

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
</style>