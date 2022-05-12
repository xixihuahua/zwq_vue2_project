/**
 * 配置路由
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
// 使用插件
Vue.use(VueRouter);


export default new VueRouter({
  routes: [
    {
      path: '/home',
      component:Home,
    },
    {
      path: '/register',
      component:Register,
    },
    {
      name:'search',
      path: '/search/:keyword?',
      component:Search,
    },
    {
      path: '/login',
      component:Login,
    },
  ]
})
