<!--
 * @description: 
 * @Date: 2020-08-31 15:35:29
 * @LastEditTime: 2020-08-31 18:50:03
-->
<template>
  <el-table
    :data="tableData"
    v-loading="loading"
    :border="border"
    :height="height"
    :style="`width: 100%;`"
    @sort-change="handelSortChange"
    :default-sort="{prop: sortField, order: order}"
  >
    <template v-for="(item,index) in columnData">
      <template v-if="!item.extends.slot">
        <el-table-column
          :key="index"
          :label="item.title"
          :prop="item.props"
          :width="item.extends.width"
          :sortable="item.extends.sortable"
          :show-overflow-tooltip="item.extends.overHiddenTip"
        ></el-table-column>
      </template>
      <template v-else>
        <el-table-column
          :key="index"
          :show-overflow-tooltip="item.extends.overHiddenTip"
          :label="item.title"
          :width="item.extends.width"
          :sortable="item.extends.sortable"
        >
          <template #default="scope">
            <slot :name="item.props" :slot-data="scope.row"></slot>
          </template>
        </el-table-column>
      </template>
    </template>
  </el-table>
</template>
<script>
export default {
  name: "Table",
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    columnData: {
      type: Array,
      required: true,
    },
    height: {
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
    border: {
      type: Boolean,
      required: true,
    },
    sortField: {
      type: String,
      required: false,
    },
    order: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handelSortChange({ column, prop, order }) {
      console.log("column: ", column);
      if (column.sortable !== "custom") return;
      this.$emit("handleSortChange", prop, order);
    },
  },
  mounted() {},
};
</script>
<style scoped lang='less'>
.el-table::before {
  height: 0 !important;
}
</style>