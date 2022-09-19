<template>
  <!-- 头部 -->
  <div class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">

        <div class="typeList">
          <router-link to="/center/myorder" class="label-4">在线客服</router-link>
          <p class="gap-space"></p>
          <a href="###" class="label-4">请登录</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">

      <div class="bottom_left">

        <router-link class="logo" title="adidas" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>


        <div class="hotArea">
<!--          <div class="hfull">男装</div>-->
<!--          <div class="hfull item">男装</div>-->
<!--          <div class="hfull item">男装</div>-->
<!--          <div class="hfull item">男装</div>-->
<!--          <div class="hfull item">男装</div>-->
          <el-menu
<!--              :default-active="activeIndex"-->
              class="el-menu-demo"
              mode="horizontal"
<!--              @select="handleSelect"-->
          >
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
              <template #title>Workspace</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            <el-menu-item index="4">Orders</el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="bottom_right">
        <div>
          <div class="search-bar-box ">
            <i class="search-bar-center-icon"></i>

            <span style="width: 150px;">三叶草上新</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style lang="less" scoped>
.header {
  &>.top {
    padding: 0 calc((100% - 1360px) / 2 - 7px) 0 calc((100% - 1360px) / 2);
    background-color: #000;

    .container {
      display: flex;
      align-content: center;
      justify-content: end;

      .typeList {

        height: 40px;
        line-height: 40px;
        display: flex;
        align-items: center;

        .label-4 {
          font-size: 13px;
          line-height: 18px;
          font-weight: 400;
          letter-spacing: .5px;
          font-family: AdihausDIN, PingFang SC, sans-serif;
          font-style: normal;
          color: #ffffff;
        }

        .gap-space {
          width: 31px;
          position: relative;
          color: #ffffff;
        }

        .gap-space::after {
          content: " ";
          width: 1px;
          height: 20px;
          position: absolute;
          top: -10px;
          left: 14px;
          transform: scaleX(0.5);
          background-color: #ffffff
        }
      }


    }
  }

  &>.bottom {
    padding: 0 calc((100% - 1360px) / 2);
    height: 84px;
    display: flex;
    justify-content: space-between;

    .bottom_left {
      display: flex;
      align-items: center;

      .logo {
        height: 100%;
        img {
          width: 84px;
        }
      }

      .hotArea {
        display: flex;
        align-items: center;

        .hfull {
          font-size: 15px;
          line-height: 20px;
          font-weight: 700;
          letter-spacing: .5px;
          font-family: AdihausDIN, PingFang SC, sans-serif;
          font-style: normal;
          color: #000;
        }

        .item {
          white-space: nowrap;
          margin-left: 20px;
          user-select: none;
        }
      }
    }

    .bottom_right {
      .search-bar-box {
        overflow: hidden;
        height: 32px;
        flex: 1;
        background: #F9F9F9;
      }
    }
  }
}
</style>
