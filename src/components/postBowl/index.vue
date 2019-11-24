<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h2 class="page-title">{{title}}</h2>
      </div>
    </div>
    <Posts :posts="posts" :title="title"></Posts>
  </div>
</template>

<script>
import Posts from "@/components/posts";
export default {
  props: {
    posts: Array,
    title: ""
  },
  components: {
    Posts
  }
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 20px;
  color: #999;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
}
</style>