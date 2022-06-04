// 引入mockjs模块
import Mock from 'mockjs';
// 引入json格式文件
import banner from './banner.json';
import floor from './floor.json';
import category from './category.json';
import { userinfo } from './user';
import { orderList } from './order';

// mock数据 第一个参数：请求地址 第二个参数
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor", { code: 200, data: floor });


Mock.mock("/mock/product/getBaseCategoryList", category);

Mock.mock("/mock/user/passport/auth/getUserInfo",userinfo);
Mock.mock("/mock/order/auth",orderList);
