<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="changeIndex(-1)">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2" @click="goSearch">
            <div class="item" v-for="(category,index) in categoryList" :key="category.categoryId"
                 :class="{cur:currentIndex===index}">
              <h3 @mouseenter="changeIndex(index)">
                <a
                    :data-categoryName="category.categoryName"
                    :data-category1Id="category.categoryId"
                >{{ category.categoryName }}</a>
              </h3>
              <div class="item-list clearfix" :style="{display:currentIndex === index? 'block' : 'none'}">
                <div class="subitem">
                  <dl class="fore" v-for="category2 in category.categoryChild" :key="category2.categoryId">
                    <dt>
                      <a :data-categoryName="category2.categoryName"
                         :data-category2Id="category2.categoryId">{{ category2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="category3 in category2.categoryChild" :key="category3.categoryId">
                        <a :data-categoryName="category3.categoryName"
                           :data-category3Id="category3.categoryId">{{ category3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>


<script>
import {mapState} from "vuex";
//按需引入：只是引入节流函数，其他的函数没有引入（模块），这样做的好处是，当你打包项目的时候体积会小一些
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      //当前这个属性决定了到底那个h3身上有类名
      currentIndex: -1,
    };
  },
  mounted() {
    this.$store.dispatch('getCategoryList')
  },
  methods: {
    changeIndex: throttle(function (index) {
      //修改当前currentIndex索引值
      //函数节流:在20MS时间之内只能执行一次
      this.currentIndex = index;
    }, 20),
    goSearch: function (event) {
      const { target } = event;
      const { categoryname , category1id ,category2id, category3id} = target?.dataset;
      if (categoryname) {
        //准备路由跳转的参数对象
        let loction = {name: "search"};
        let query = {categoryName: categoryname};
        //一定是a标签：一级目录
        if (category1id) {
          query.category1Id = category1id;
          //一定是a标签：二级目录
        } else if (category2id) {
          query.category2Id = category2id;
          //一定是a标签：三级目录
        } else {
          query.category3Id = category3id;
        }
        //动态给location配置对象添加query属性
        loction.query = query;
        //路由跳转
        this.$router.push(loction);
      }
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    })
  }
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .cur {
          background: skyblue;
        }

        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

        }
      }
    }
  }
}
</style>