<template>
  <div class="about-container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="page-title">关于我</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="paragraph-container">
          <div class="content">
            <p class="img-l-text-r">
              <img src="~@/assets/images/me.jpg" alt />
              <span>何健，95后，一名前端开发，毕业于西安邮电大学，地道的西安关中人，目前工作在杭州，平常喜欢写代码，旅行和打球。最喜欢的球队是达拉斯独行侠，最喜欢的球星是卢卡东契奇。</span>
            </p>
            <p class="title">社交信息：</p>
            <ul class="links">
              <li>
                <svg-icon iconClass="github" />
                <a href="https://github.com/dirkhe1051931999" target="_blank">@dirkhe1051931999</a>
              </li>
              <li>
                <svg-icon iconClass="weibo" />
                <a href="https://weibo.com/u/5908925574" target="_blank">@HHHHH健</a>
              </li>
              <li>
                <svg-icon iconClass="email" />
                <a href="mailto:hejiandrik@163.com" target="_blank">hejiandrik#163.com</a>
              </li>
              <li>
                <svg-icon iconClass="blog" />
                <a href="https://www.cnblogs.com/dirkhe/" target="_blank">博客园（旧博客）</a>
              </li>
            </ul>
            <p class="title">请我喝奶茶：</p>
            <div class="only-img">
              <img src="~@/assets/images/wpay.jpg" alt />
            </div>
            <div class="modify-time">最后修改时间：2019年11月24日</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { meta } from "@/utils/meta";
export default {
  name: "About",
  metaInfo: {
    title: "关于我 | HHHHH健",
    meta: meta
  },
  asyncData({ route, store }) {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.about-container {
  padding-bottom: 4em;
  h2 {
    font-size: 20px;
    color: #999;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
  }
  .paragraph-container {
    font-size: 15px;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    margin: 20px auto;
    p {
      line-height: 1.8;
      font-size: 15px;
    }
    .title {
      display: block;
      font-size: 18px;
      border-bottom: 1px dashed #ccc;
      line-height: 30px;
      margin-bottom: 15px;
      margin-top: 30px;
      padding-bottom: 8px;
    }
    .img-l-text-r {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        display: inline-block;
        width: 8em;
        height: 8em;
        border-radius: 4em;
      }
      span {
        margin-left: 20px;
      }
    }
    .only-img {
      text-align: center;
      img {
        width: 20em;
        height: 22em;
      }
    }
    .links {
      svg {
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }
    }
    .modify-time {
      margin-top: 20px;
      padding: 10px;
      text-align: left;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>