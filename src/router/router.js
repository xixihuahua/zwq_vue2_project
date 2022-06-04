import Home from '@/pages/Home';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';
import MyOrder from '@/pages/Center/myOrder';
import GroupBuy from '@/pages/Center/groupOrder';
export default [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    name: 'search',
    path: '/search/:keyword?',
    component: Search,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/detail/:skuId',
    component: Detail,
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,
    name: 'addcartsuccess',
    beforeEnter(to, from, next) {
      // 得到当前路由信息对象
      // const route = router.currentRoute  // route就是from

      // 得到要跳转到目路由的query参数
      const skuNum = to.query.skuNum;
      // 读取保存的数据
      const skuInfo = JSON.parse(window.sessionStorage.getItem('SKUINFO'));
      console.log('---', skuNum, skuInfo);
      // 只有都存在, 才放行
      if (skuNum && skuInfo) {
        next();
      } else {
        // 在组件对象创建前强制跳转到首页
        next('/');
      }
    },
  },
  {
    path: '/shopcart',
    component: ShopCart,
  },
  {
    path: '/trade',
    component: Trade,
    /* 只能从购物车界面, 才能跳转到交易界面 */
    beforeEnter(to, from, next) {
      if (from.path === '/shopcart') {
        next();
      } else {
        next('/shopcart');
      }
    },
  },
  {
    path: '/pay',
    component: Pay,
    // 将query参数映射成props传递给路由组件
    props: (route) => ({ orderId: route.query.orderId }),

    /* 只能从交易界面, 才能跳转到支付界面 */
    beforeEnter(to, from, next) {
      if (from.path === '/trade') {
        next();
      } else {
        next('/trade');
      }
    },
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    /* 只有从支付界面, 才能跳转到支付成功的界面 */
    beforeEnter(to, from, next) {
      if (from.path === '/pay') {
        next();
      } else {
        next('/pay');
      }
    },
  },
  {
    path: '/center',
    component: Center,
    children: [
      {
        // path: '/center/myorder',
        path: 'myorder',
        component: MyOrder,
      },
      {
        path: 'groupbuy',
        component: GroupBuy,
      },

      {
        path: '',
        redirect: 'myorder',
      },
    ],
  },
];
