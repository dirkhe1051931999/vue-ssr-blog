<template>
  <div class="posts-container">
    <div class="row post-container-wrapper">
      <div class="col-md-6" v-for="(item,index) in posts" :key="index">
        <div class="post-container">
          <h2 class="post-title">
            <a rel="bookmark" :href="`/post/?id=${item.id}`">{{item.title}}</a>
          </h2>
          <div class="meta-box">
            <span class="m-post-date">
              <svg-icon iconClass="calendar"></svg-icon>
              {{item.createTime | formatTime}}
            </span>
          </div>
          <div class="post-content post-expect">
            {{item.content | formatContent}}
            <a
              class="more-link btn btn-primary btn-xs"
              :href="`/post/?id=${item.id}`"
            >阅读全文</a>
          </div>
          <div class="meta-box post-bottom-meta-box hidden-print">
            <span class="tag-links">
              <svg-icon iconClass="label"></svg-icon>
              <a
                rel="tag"
                :href="title!=='最近更新'?'#':`/archive?id=${item.categoryId}&from=categories`"
              >{{item.categoryName}}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { func } from "@/mixins/utils";
export default {
  mixins: [func],
  props: {
    posts: {
      default: [],
      type: Array
    },
    title: ""
  },
  data() {
    return {};
  },
  filters: {
    formatContent(content) {
      content = content
        .replace(/(#+)(.*)/g, "")
        .replace(/\!\[[\s\S]*?\]\([\s\S]*?\)/g, "")
        .replace(/\[[\s\S]*?\]\([\s\S]*?\)/g, "")
        .replace(/`{1,2}[^`](.*?)`{1,2}/g, "")
        .replace(/```([\s\S]*?)```[\s]*/g, "")
        .replace(/\`/g, "")
        .replace(/\>|\-|\/|\+|\*/g, "");
      return content.slice(0, 100);
    }
  },
  watch: {},
  methods: {
    toDetailPage(id) {
      window.location.href = `/post/?id=${id}`;
    }
  },
  created() {},
  mounted() {
    console.log(window.__INITIAL_STATE__.posts);
  }
};
</script>

<style scoped lang="scss">
.post-container {
  height: 220px;
  position: relative;
  .post-title {
    a {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      cursor: pointer;
      font-size: 24px;
      margin-bottom: 8px;
      margin-top: 12px;
      line-height: 1.2;
      color: #2a2935;
    }
  }
  .meta-box {
    padding: 0;
    border: none;
    margin: 16px 0 8px;
    svg {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
    span {
      margin-right: 20px;
      color: #757575;
      font-size: 0.8em;
    }
  }
  .post-content {
    font-size: 15px;
    line-height: 1.6;
    font-weight: 400;
    text-align: justify;
    .btn-primary {
      background: #34495e;
    }
  }
  .tag-links {
    position: absolute;
    left: 0;
    bottom: 5px;
    svg {
      margin: 0;
    }
    a {
      cursor: pointer;
      text-decoration: underline;
      text-underline-position: under;
      margin-left: 5px;
    }
  }
}
</style>