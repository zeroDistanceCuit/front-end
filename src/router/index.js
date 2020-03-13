import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/home-page/home-page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:'mainPage',
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
    }, {
      path: '/three',
      component: () =>
        import('../components/three-model/three-model.vue')
    }, {
      path: '/mainPage',
      component: () =>
        import('../views/main-page/main-page.vue')
    }]
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import('../views/admin-manage/admin-manage.vue'),
    children: [{
      path: 'sellerInfo',
      component: () =>
        import('../views/seller-info/seller-info.vue')
    }, {
      path: 'merchandiseManagement',
      component: () =>
        import('../views/merchandise-management/merchandise-management.vue')
    }, {
      path: 'salesManage',
      component: () =>
        import('../views/sales-manage/sales-manage.vue')
    }, {
      path: 'clientFeedback',
      component: () =>
        import('../views/client-feedback/client-feedback.vue')
    }]
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
