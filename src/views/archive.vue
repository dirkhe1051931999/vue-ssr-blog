<template>
  <div>
    <PostBowl :posts="posts" :title="title"></PostBowl>
  </div>
</template>

<script>
import PostBowl from "@/components/postBowl";
import { meta } from "@/utils/meta";
export default {
  components: {
    PostBowl
  },
  metaInfo: {
    title: "归档 | HHHHH健",
    meta: meta
  },
  data() {
    return {};
  },
  asyncData({ route, store }) {
    let { from, id } = route.query;
    if (from === "categories") {
      return store.dispatch("getCategory", {
        id,
        page: 1,
        pageNum: 100
      });
    } else if (from === "tags") {
      return store.dispatch("getTags", {
        id,
        page: 1,
        pageNum: 100
      });
    }
  },
  computed: {
    posts() {
      let from = this.$route.query.from;
      return this.$store.state[from];
    },
    title() {
      let from = this.$route.query.from;
      if (from === "categories") {
        return `类别：${this.posts[0].categoryName}(${this.posts.length})`;
      } else if (from === "tags") {
        return `标签：${this.posts[0].categoryName}(${this.posts.length})`;
      }
    }
  },
  created() {}
};
</script>

<style scoped lang="scss">
</style>