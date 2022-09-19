<template>
  <div>
    <!-- 全局的三级菜单 -->
    <typeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <!-- Floor这个组件：自己在组件内部是没有发请求的，数据是父组件给的 -->
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav";
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import {mapState} from "vuex";

export default {
  name: 'Home',
  components: {Brand, Floor, Like, Rank, Recommend, ListContainer, TypeNav},
  mounted() {
    this.$store.dispatch('getFloorList')
    // 获取用户信息
    this.$store.dispatch('getUserInfo');
  },
  computed:{
    ...mapState({
      floorList : (state)=> state.home.floorList
    })
  }
}
</script>

