import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/home-page/home-page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: 'mainPage',
    name: "Home",
    component: homePage,
    children: [{
      path: '/three',
      component: () =>
        import('../components/three-model/three-model.vue')
    }, {
      path: '/mainPage',
      component: () =>
        import('../views/main-page/main-page.vue')
    }, {
      path: '/shopInfo/:shopType',
      name: "商品页面，根据类型区分",
      props: true,
      component: () =>
        import('@/views/shop-info-type/shop-info-type.vue')
    }, {
      path: '/shopInfor',
      name: "商品详情页面",
      props: true,
      component: () =>
        import('@/views/shop-info/shop-info.vue')
    },{
      path:'/user',
      props:true,
      component:()=>
      import('@/views/user-admin/user-admin.vue'),
      children:[{
        path:'/self',
        component:()=>
        import('@/views/user-self/user-self.vue')
      },{
        path:'/order',
        component:()=>
        import('@/views/shop-order/shop-order.vue')
      },{
        path:'/cart',
        component:()=>
        import('@/views/shop-cart/shop-cart.vue')
      }]
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
