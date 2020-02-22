<template>
  <div>
      <Nav/>
      <Footer/>
  </div>
</template>

<script>
import { homePage } from "./home-page";
export default {
  mixins: [homePage]
};
</script>

<style>
* {
  position: fixed;
  top: 0%;
  left: 0%;
}
</style>