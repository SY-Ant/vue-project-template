<!--
 * @description: 
 * @Date: 2020-08-31 18:42:29
 * @LastEditTime: 2020-08-31 19:11:26
-->
<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pageParams.currentPage"
    :page-sizes="pageParams.pageSizeList"
    :page-size="pageParams.pageSize"
    :layout="pageParams.layout"
    :total="pageParams.totalPage"
  ></el-pagination>
</template>
<script>
export default {
  name: "Page",
  props: {
    pageParams: {
      type: Object,
      required: true,
      default() {
        return {
          currentPage: 1, //当前页数
          pageSize: 1, //多少条
          totalPage: 10, //总条数
          layout: "total, sizes, prev, pager, next, jumper",
          pageSizeList: [1, 2],
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSizeChange(val) {
      //当前多少条
      this.$emit("handlePageChange", 1, val);
    },
    handleCurrentChange(val) {
      // 当前第几页
      this.$emit("handlePageChange", val, this.pageParams.pageSize);
    },
  },
  components: {},
  mounted() {},
};
</script>
<style scoped lang='less'>
.el-pagination {
  height: 40px;
  box-sizing: border-box;
  float: right;
}
</style>