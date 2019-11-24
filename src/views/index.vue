<template>
  <div class="index-container">
    <PostBowl :posts="posts" title="最近更新"></PostBowl>
    <div class="col-md-12 more">
      <div class="row" v-if="!postsNoMore">
        <div class="col-xs-6 col-sm-4"></div>
        <div class="col-xs-6 col-sm-4 text-center">
          <a class @click.stop="getMore">浏览更多文章</a>
        </div>
        <div class="clearfix visible-xs-block"></div>
        <div class="col-xs-6 col-sm-4"></div>
      </div>
      <div class="row" v-if="postsNoMore">
        <div class="col-xs-6 col-sm-4"></div>
        <div class="col-xs-6 col-sm-4 text-center">没有更多了~</div>
        <div class="clearfix visible-xs-block"></div>
        <div class="col-xs-6 col-sm-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PostBowl from "@/components/postBowl";
import { meta } from "@/utils/meta";
export default {
  components: {
    PostBowl
  },
  name: "Index",
  metaInfo: {
    title: "首页 | HHHHH健",
    meta: meta
  },
  title() {
    return "首页1";
  },
  asyncData({ route, store }) {
    return store.dispatch("getPostList");
  },
  data() {
    return {
      isShowLoading: false,
      isNoMore: false,
      page: 1
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    postsNoMore() {
      return this.$store.state.postsNoMore;
    }
  },
  watch: {},
  methods: {
    getMore() {
      this.isShowLoading = true;
      this.page = this.page + 1;
      this.$store.dispatch("getMorePost", { page: this.page, pageNum: 10 });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.index-container {
  padding-bottom: 4em;
  .more {
    cursor: pointer;
    padding-top: 20px;
  }
}
</style>