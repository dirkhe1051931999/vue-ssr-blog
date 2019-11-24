<template>
  <div class="item-container htmleaf-container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="page-title">我的项目</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-4 item" v-for="(item, index) in items" :key="index">
        <div class="thumbnail">
          <img :src="`${host}${item.poster}`" :alt="item.name" />
          <div class="caption">
            <h3>{{item.name}}</h3>
            <p class="description">{{item.description}}</p>
            <p class="text-center">
              <a :href="item.github" class="btn btn-primary" role="button" target="_blank">github</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { meta } from "@/utils/meta";
export default {
  metaInfo: {
    title: "项目 | HHHHH健",
    meta: meta
  },
  asyncData({ store, route }) {
    return store.dispatch("getItems");
  },
  data() {
    return {
      host: "http://127.0.0.1:9001"
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  }
};
</script>

<style scoped lang="scss">
.item-container {
  padding-bottom: 4em;
  h2 {
    font-size: 20px;
    color: #999;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
  }
  .item {
    .caption {
      h3 {
        text-align: center;
        font-size: 20px;
        span {
          padding-top: 5px;
          display: block;
          color: #999;
          font-size: 16px;
        }
      }
      .description {
        overflow: hidden;
      }
    }
  }
}
</style>