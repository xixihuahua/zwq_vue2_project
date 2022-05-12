import {reqgetCategoryList, reqGetBannerList, reqGetFloorList} from "@/api";
//home模块的仓库
const state = {
    //home仓库中存储三级菜单的数据
    categoryList: [],
    // 轮播图数据
    bannerList: [],
    floorList:[],
};
//mutions是唯一修改state的地方
const mutations = {
    GETCATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    },
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
    // 获取商品分类信息
    async getCategoryList({commit}) {
        let result = await reqgetCategoryList();
        if (result.code === 200) {
            commit("GETCATEGORYLIST", result.data);
        }
    },
    // 获取轮播图数据
    async getBannerList({commit}) {
        let result = await reqGetBannerList();
        if (result.code === 200) {
            commit("GETBANNERLIST", result.data);
        }
    },
    async getFloorList({commit}) {
        let result = await reqGetFloorList();
        if (result.code === 200) {
            commit("GETFLOORLIST", result.data);
        }
    },
};
//计算属性
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
};
