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
      path: '/category',
      component: () => import('../pages/Category.vue'),
      name: 'about'
   },
]

const router = new VueRouter({ routes, mode: 'history' })
export default router;