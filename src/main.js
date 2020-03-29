import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'
import { get,post } from "./utils/http";
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
Vue.component('chart', ECharts)

Vue.config.productionTip = false;
Vue.prototype.GET=get
Vue.prototype.POST=post

Vue.use(ElementUI);

let storage = window.localStorage
Vue.prototype.storage=storage

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
