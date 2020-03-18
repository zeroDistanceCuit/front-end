<template>
  <div>
  <div>
      
  </div>
      <!-- TODO 返回顶部，未测试 -->
      <!-- <img v-if="btnFlag" class="go-top" src="图片url" @click="backTop"> -->
  </div>
</template>
<script>
import { shopInfoType } from "./shop-info-type";
export default {
  mixins: [shopInfoType]
};
</script>