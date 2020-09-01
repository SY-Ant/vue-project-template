<!--
 * @description: 
 * @Date: 2020-08-25 18:27:35
 * @LastEditTime: 2020-08-31 11:40:25
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
#app {
  width: 100%;
  height: 100%;
  .title {
    font-size: 16px;
  }
  .box {
    width: @boxWidth;
    height: @boxHeight;
    background-color: @boxBgcolor;
  }
  img {
    width: @boxWidth;
  }
}
</style>
<style lang="less">
@import "~assets/css/common.less";
</style>
