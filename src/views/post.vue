<template>
  <div class="post-container">
    <h1 class="post-title">
      <a rel="bookmark">{{post.title}}</a>
    </h1>
    <div class="meta-box">
      <span class="m-post-date">
        <svg-icon iconClass="calendar"></svg-icon>
        {{post.createTime | formatTime}}
      </span>
      <span class="m-post-count">
        <svg-icon iconClass="pencil"></svg-icon>
        {{post.content | calacWords}}字
      </span>
      <span class="m-post-reading">
        <svg-icon iconClass="countdown"></svg-icon>
        {{randomTime}}分钟阅读
      </span>
    </div>
    <div class="post-content">
      <div class="markdown-body" v-html="calacContent"></div>
    </div>
    <div class="meta-box post-bottom-meta-box hidden-print">
      <span class="tag-links">
        <svg-icon iconClass="label"></svg-icon>
        <a
          :href="`/archive?id=${tag.tagId}&from=tags`"
          rel="tag"
          v-for="(tag,i) in post.tags"
          :key="i"
        >{{tag.tagName}}{{i===post.tags.length-1?'':','}}</a>
      </span>
    </div>
    <div class="row page-navigation-container hidden-print">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="navigation-wrapper">
          <div class="pager">
            <div class="title-box">
              <svg-icon iconClass="card"></svg-icon>#看看其他
            </div>
            <a
              :title="post.prev.title"
              class="previous clearfix"
              v-if="post.prev.title"
              :href="`/post?id=${post.prev.id}`"
            >
              <span aria-hidden="true">前一篇: {{post.prev.title}}</span>
            </a>
            <a
              :title="post.next.title"
              class="next clearfix"
              v-if="post.next.title"
              :href="`/post?id=${post.next.id}`"
            >
              <span aria-hidden="true">后一篇: {{post.next.title}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { func } from "@/mixins/utils";
import marked from "marked";
import Hlj from "highlight.js";
import { meta } from "@/utils/meta";
export default {
  components: {},
  mixins: [func],
  name: "Post",
  metaInfo: {
    title: "文章详情 | HHHHH健",
    meta: meta
  },
  asyncData({ route, store }) {
    return store.dispatch("getPost", route.query.id);
  },
  data() {
    return {};
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
    randomTime() {
      var min = 7;
      var max = 15;
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    calacContent() {
      return marked(this.post.content);
    }
  },
  watch: {},
  filters: {
    calacWords(content) {
      content = content
        .replace(/(#+)(.*)/g, "")
        .replace(/\!\[[\s\S]*?\]\([\s\S]*?\)/g, "")
        .replace(/\[[\s\S]*?\]\([\s\S]*?\)/g, "")
        .replace(/`{1,2}[^`](.*?)`{1,2}/g, "")
        .replace(/```([\s\S]*?)```[\s]*/g, "")
        .replace(/\`/g, "")
        .replace(/\>|\-|\/|\+|\*/g, "");
      return content.length;
    }
  },
  created() {
    marked.setOptions({
      highlight: code => {
        return Hlj.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/markdown.scss";
@import "~highlight.js/styles/atelier-cave-light.css";

.post-container {
  padding-bottom: 4em;
  .post-title {
    margin-bottom: 16px;
    margin-top: 24px;
    font-size: 28px;
    a {
      color: #2a2935;
    }
  }
  .meta-box {
    font-size: 0.8em;
    padding: 1em 0;
    border-bottom: 1px dashed #cacaca;
    border-top: 1px dashed #cacaca;
    margin: 2em 0;
    svg {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
    span {
      margin-right: 20px;
      color: #757575;
    }
  }
  .tag-links {
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
  .navigation-wrapper {
    border: 1px solid #d8d7d7;
    padding: 1px;
    .pager {
      font-size: 14px;
      list-style: none;
      margin: 0;
      border: 1px dashed #d8d7d7;
      padding: 1em;
      position: relative;
      a {
        text-align: left;
      }
      .previous {
        float: left;
      }
      .next {
        float: right;
      }
      .title-box {
        svg {
          width: 16px;
          height: 16px;
        }
        position: absolute;
        left: -6px;
        top: -18px;
        background: rgba($color: #fff, $alpha: 0.5);
        border: 1px solid #c5c5c5;
        padding: 0 6px;
        font-size: 15px;
        color: #333;
        text-align: left;
        width: 110px;
      }
    }
  }
}
</style>