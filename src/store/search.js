import {reqGetSearchInfo} from "@/api";

const state = {
    searchList: {},
}
const mutations = {
    GETSEARCHLIST(state,searchList) {
        state.searchList = searchList;
    }
}
const actions = {
    async getSearchList({commit}, params) {
        const res = await reqGetSearchInfo(params)
        if (res.code === 200) {
            commit('GETSEARCHLIST', res.data)
        }
    }
}

// 计算属性（简化仓库中的数据）
const getters = {
    // 当前形参state:当前仓库中的state,并非大仓库中的state
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    },
}
export default {
    actions,
    mutations,
    state,
    getters,
}