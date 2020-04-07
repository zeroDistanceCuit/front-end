<template>
<!-- 加人物模型 -->
  <div>
    <el-card body-style="padding:0px">
    <ThreeModel/>
    </el-card>
  </div>
</template>

<script>
import { userSelf } from "./user-self";
export default {
  mixins: [userSelf]
};
</script>

<style>
</style>