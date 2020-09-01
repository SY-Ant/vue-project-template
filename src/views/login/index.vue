<!--
 * @description: 
 * @Date: 2020-08-30 22:44:44
 * @LastEditTime: 2020-09-01 21:00:23
-->
<template>
  <div id="login_container">
    <TableComponent
      :tableData="tableData"
      :columnData="columnData"
      :loading="loading"
      :border="border"
      :height="`calc(100% - 40px)`"
      :sortField="sortField"
      :order="order"
      @handleSortChange="handleSortChange"
    >
      <template #name="{slotData}">
        <p>{{slotData.name}}</p>
      </template>
      <template #address="{slotData}">
        <p>{{slotData.address}}</p>
      </template>
    </TableComponent>
    <Page :pageParams="pageParams" @handlePageChange="handlePageChange" />
  </div>
</template>

<script>
import TableComponent from "components/common/table.vue";
import Page from "components/common/page.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      imgUrl: "",
      tableData: [],
      columnData: [
        {
          props: "date",
          title: "日期",
          extends: { width: 100, sortable: "custom" },
        },
        { props: "name", title: "姓名", extends: { slot: true } },
        {
          props: "address",
          title: "地址",
          extends: { slot: true, overHiddenTip: true, sortable: "custom" },
        },
      ],
      loading: false,
      border: false,
      sortField: "date",
      order: "descending",
      pageParams: {
        currentPage: 1, //当前页数
        pageSize: 1, //多少条
        totalPage: 10, //总条数
        layout: "total, sizes, prev, pager, next, jumper",
        pageSizeList: [1, 2],
      },
    };
  },
  methods: {
    handleSortChange(argv1, argv2) {
      this.sortField = argv1;
      this.order = argv2;
    },
    handlePageChange(page, size) {
      this.pageParams = Object.assign({}, this.pageParams, {
        currentPage: page,
        pageSize: size,
      });
    },
    ...mapMutations("list", ["addList"]),
    ...mapMutations("login", ["increment"]),
  },
  components: {
    TableComponent,
    Page,
  },
  mounted() {
    this.$server
      .postJson("/list", { name: "zhangsan", age: 18 })
      .then((res) => {
        this.tableData = res.data;
        this.addList(res.data);
        this.increment("lisi");
        this.tableData.forEach((ele, index) => {
          ele.idx = index;
        });
      });
  },
  computed: {
    ...mapState({
      userName: (state) => state.login.userName,
      listArr: (state) => state.list.listArr,
    }),
  },
};
</script>
<style scoped lang='less'>
#login_container {
  width: 100%;
  height: 100%;
}
</style>