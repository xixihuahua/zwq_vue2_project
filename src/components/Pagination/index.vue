<template>
  <div class="pagination">
    <button :disabled="page === 1" @click="changePage(page-1)">上一页</button>
    <button v-if="startAndEnd.start > 1" @click="changePage(1)">1</button>
    <button v-if="startAndEnd.start > 2">···</button>

    <button v-for="item in startAndEnd.end"
            :key="item"
            v-if="item >= startAndEnd.start"
            :class="{active:page === item}"
            @click="changePage(item)">{{ item }}</button>

    <button v-if="startAndEnd.end<totalPage-1">···</button>
    <button v-if="startAndEnd.end<totalPage" @click="changePage(totalPage)">{{ totalPage }}</button>
    <button :disabled="page === totalPage" @click="changePage(page+1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['page', 'pageSize', 'total', 'continues'],
  computed: {
    totalPage() {
      const {total, pageSize} = this
      return Math.ceil(total / pageSize)
    },
    startAndEnd() {
      let start = 0, end = 0;
      if (this.totalPage < this.continues) {
        return {
          start: 1,
          end: this.totalPage,
        }
      }

      start = this.page - Math.floor(this.continues / 2)
      end = this.page + Math.floor(this.continues / 2)

      if (start < 1) {
        return {
          start: 1,
          end: this.continues
        }
      }

      if (end > this.totalPage) {
        return {
          start: this.totalPage - this.totalPage,
          end: this.totalPage
        }
      }
      return {
        start, end
      }
    },
  },
  methods:{
    changePage(page){
      this.$emit('changePage',page)
    },
  }
}
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
