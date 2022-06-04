import {reqAddCar, reqGetGoodDetail} from "@/api";
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo: {},
    // 游客临时身份
    uuid_token:getUUID(),
}

const mutations = {
    GETGOODDETAIL(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
}

const actions = {
    async getGoodDetail({commit}, skuId) {
        const res = await reqGetGoodDetail(skuId)
        if (res.code === 200) {
            commit('GETGOODDETAIL', res.data)
        }
    },
    async addCar(_, {skuId, skuNum}) {
        const result = await reqAddCar(skuId, skuNum)
        if (result.code == 200) {
          //返回的是成功的标记
          return "ok";
        } else {
          //返回的是失败的标记
          return Promise.reject(new Error("faile"));
        }
    
    }

}

const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || {}
    }

}
export default {
    state,
    mutations,
    actions,
    getters
}
