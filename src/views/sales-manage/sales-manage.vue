<template>
  <div>
    <el-card style="margin-top:-70px">
    <chart class="echart1" ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
    <chart class="echart2" ref="chart2" :options="orgOptions2" :auto-resize="true"></chart>

    </el-card>
  </div>
</template>

<script>
import { salesManage } from "./sales-manage";
export default {
mixins:[salesManage]
}
</script>

<style>
.echart2 .echart1 {
 display: inline-block;
}
.echart1{
  float: left;
}
.echart2{
  margin-left: 600px;
}
</style>