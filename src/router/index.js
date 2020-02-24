import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/home-page/home-page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: homePage,
    children: [{
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },{
      path:'/test',
      component:()=>
      import('../components/login-model/login-model.vue')
    }]
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
