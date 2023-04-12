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
      path: '/about',
      component: () => import('../pages/About.vue'),
      name: 'about'
   },
]

const router = new VueRouter({ routes })
export default router;