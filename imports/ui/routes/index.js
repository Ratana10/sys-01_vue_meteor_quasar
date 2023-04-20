import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

let routes = [
   {
      path: '/',
      component: () => import('../pages/Home.vue'),
      name: 'home'
   },
   {
      path: '/user',
      component: () => import('../pages/Category.vue'),
      name: 'user'
   },
   {
      path: '/customer',
      component: () => import('../pages/Customer.vue'),
      name: 'customer'
   },
   {
      path: '/Category',
      component: () => import('../pages/Category.vue'),
      name: 'customer'
   },
   {
      path: '/item',
      component: () => import('../pages/Item.vue'),
      name: 'item'
   },
   {
      path: '/supplier',
      component: () => import('../pages/Supplier.vue'),
      name: 'supplier'
   },
   {
      path: '/purchase',
      component: () => import('../pages/Purchase.vue'),
      name: 'purchase'
   },
   {
      path: '/import',
      component: () => import('../pages/Import.vue'),
      name: 'purchase'
   },
]

const router = new VueRouter({ routes, mode: 'history' })
export default router;