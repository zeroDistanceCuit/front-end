<template>
  <div>
    <model-obj src="/static/Shirley.obj" mtl="/static/Shirley.mtl"></model-obj>
  </div>
</template>

<script>
import { ModelObj } from "vue-3d-model";
export default {
  components: {
    ModelObj
  } 
};
</script>

<style>
#container {
  width: 1200px;
  margin: 0 auto;
  height: 800px;
  overflow: hidden;
}
</style>