import Vue from 'vue'
import App from './App.vue'
// 引入路由相关文件
import router from '@/router';
// 引入仓库进行注册
import store from '@/store'
//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import typeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
// 引入mockServer.js
import '@/mock/mockServer';
//引入表单校验插件
import "@/plugins/validate";
//统一引入
import * as API from '@/api';
import 'swiper/css/swiper.css';
import { Button,MessageBox} from 'element-ui';
//引入图片懒加载插件
import VueLazyload from 'vue-lazyload';
// 引入默认图片
import atm from '@/assets/1.gif';
//注册插件
Vue.use(VueLazyload,{
  //懒加载默认的图片
  loading:atm
});
//引入自定义插件
import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins,{
    name:'upper'
});
Vue.config.productionTip = false

//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(typeNav.name, typeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
//注册全局组件
Vue.component(Button.name, Button);
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
new Vue({
  render: h => h(App),
  beforeCreate() {
    // 设置全局事件总线
    Vue.prototype.$bus = this;
    // 避免每次import接口都挨个引入
    Vue.prototype.$API = API;
  },
  // 注册路由
  router,
  store,
}).$mount('#app')
