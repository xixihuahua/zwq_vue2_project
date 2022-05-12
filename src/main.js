import Vue from 'vue'
import App from './App.vue'
// 引入路由相关文件
import router from '@/router';
// 引入仓库进行注册
import store from '@/store'
//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import typeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
// 引入mockServer.js
import '@/mock/mockServer';

import 'swiper/css/swiper.css';

Vue.config.productionTip = false

//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(typeNav.name, typeNav);
Vue.component(Carousel.name, Carousel);

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  store,
}).$mount('#app')
