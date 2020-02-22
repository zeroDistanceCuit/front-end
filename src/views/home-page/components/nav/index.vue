<template>
  <div class="demo-image__error nav-image">
    <div class="block">
      <span class="demonstration">默认</span>
      <el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
    </div>
  </div>
</template>

<script>
import { Nav } from "./index";
export default {
  mixins: [Nav]
};
</script>

<style>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>