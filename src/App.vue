<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {
    // 防止服务端渲染闪屏问题
    document.getElementsByTagName("body")[0].style.display = "block";
  }
};
</script>

<style lang="scss">
@import "reset-css";
@import "./assets/styles/common.scss";
* {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>