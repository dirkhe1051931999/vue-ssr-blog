<template>
  <div class="types-container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="page-title">归档</h2>
      </div>
    </div>
    <div class="sorts">
      <div class="row">
        <div class="col-md-12">
          <svg-icon iconClass="sort"></svg-icon>类别
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <ul>
            <a
              :href="`/archive?id=${item.id}&from=categories`"
              v-for="(item, index) in archive.categories"
              :key="index"
            >{{item.name}}({{item.count}})</a>
          </ul>
        </div>
      </div>
    </div>
    <div class="labels">
      <div class="row">
        <div class="col-md-12">
          <svg-icon iconClass="label"></svg-icon>标签
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <ul>
            <a
              :href="`/archive?id=${item.id}&from=tags`"
              v-for="(item, index) in archive.tags"
              :key="index"
              v-show="item.count"
            >{{item.name}}({{item.count}})</a>
          </ul>
        </div>
      </div>
    </div>
    <div class="timeline">
      <div class="row">
        <div class="col-md-12">
          <svg-icon iconClass="time"></svg-icon>时间
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="time" v-for="(item, index) in archive.times" :key="index">
            <h3>{{item[0]}}</h3>
            <ul>
              <li v-for="(list, i) in item[1]" :key="i">
                <a :href="`/post?id=${list.id}`">{{list.title}}</a>
                <i>--{{list.createTime}}</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { meta } from "@/utils/meta";
export default {
  name: "Types",
  metaInfo: {
    title: "归档 | HHHHH健",
    meta: meta
  },
  asyncData({ store, route }) {
    return store.dispatch("getArchive");
  },
  computed: {
    archive() {
      return this.$store.state.archive;
    }
  }
};
</script>

<style scoped lang="scss">
.types-container {
  padding-bottom: 4em;
  h2 {
    font-size: 20px;
    color: #999;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
  }
  .sorts {
    margin-top: 1em;
  }
  .sorts,
  .labels {
    font-size: 16px;
    svg {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
    ul {
      font-size: 15px;
      padding: 8px 0;
      position: relative;
      left: -8px;
      a {
        display: inline-block;
        padding: 10px 14px;
        margin: 8px;
        border-radius: 4px;
        background-color: rgba(27, 31, 35, 0.05);
        color: #2fa0ec;
      }
    }
  }
  .timeline {
    font-size: 16px;
    svg {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
    .time {
      font-size: 14px;
      h3 {
        padding: 0;
        margin: 0;
        margin: 0.5em 0;
      }
      ul {
        li {
          line-height: 1.8;
          a {
            display: inline-block;
            font-size: 16px;
          }
          i {
            display: inline-block;
            margin-left: 0.8em;
            font-size: 0.9em;
            color: #888;
            font-size: 13px;
            font-style: italic;
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>