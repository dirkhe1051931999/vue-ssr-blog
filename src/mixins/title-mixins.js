function getTitle(vm) {
  // 组件可以提供一个 `title` 选项
  // 此选项可以是一个字符串或函数
  const { title } = vm.$options;
  if (title) {
    return typeof title === "function" ? title.call(vm) : title;
  } else {
    return "";
  }
}

const serverTitleMixin = {
  created() {
    const title = getTitle(this);
    if (title && this.$ssrContext) {
      this.$ssrContext.title = title;
    }
  }
};

const clientTitleMixin = {
  mounted() {
    const title = getTitle(this);
    if (title) {
      document.title = title;
    }
  }
};

export default process.env.VUE_ENV === "server"
  ? serverTitleMixin
  : clientTitleMixin;
