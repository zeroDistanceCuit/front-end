<template>
  <div style="home-body">
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
 margin: 0%;
 padding: 0%
}
</style>