<template>
  <model-gltf :backgroundColor="bgColor" :src="modelSrc"></model-gltf>
</template>

<script>
import { ModelGltf } from "vue-3d-model";
import store from "@/store/user-auth/index";

export default {
  components: {
    ModelGltf
  },
  store,
  data() {
    return {
      modelSrc: "",
      bgColor: "#f0f0f0",
      modelInfo: {}
    };
  },
  // 通过type进行判断是人模型还是商品模型
  // 未能立刻取到modelId
  created() {
    this.modelInfo = this.$store.getters.getModel;
    if (this.modelInfo.type === "user") {
      this.GET("/api/user/getUserFlesh?id=" + this.modelInfo.modelId).then(
        res => {
          this.modelSrc =
            "static/models/gltf/" + res.result.data.Model + ".gltf";
        }
      );
    }
    if (this.modelInfo.type === "shop") {
      this.GET('/api/shops/searchModelById?id='+this.modelInfo.modelId).then(
        res => {
          this.modelSrc =
            "static/models/gltf/" + res.result.data.Model + ".gltf";
        }
      )
    }
  }
};
</script>
<style>
</style>