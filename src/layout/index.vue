<template>
  <div>
    <nav class="navbar-vertical-left navbar navbar-default g-navbar-box hidden-print">
      <ul class="nav navbar-nav">
        <li>
          <a @click="toPage('/')">
            <i>
              <svg-icon iconClass="home" />
            </i>
            <span>首页</span>
          </a>
        </li>
        <li>
          <a @click="toPage('/types')">
            <i>
              <svg-icon iconClass="types" />
            </i>
            <span>归档</span>
          </a>
        </li>
        <li>
          <a @click="toPage('/item')">
            <i>
              <svg-icon iconClass="item" />
            </i>
            <span>项目</span>
          </a>
        </li>
        <li>
          <a @click="toPage('/about')">
            <i>
              <svg-icon iconClass="about" />
            </i>
            <span>关于</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="container-fluid main-container col-md-9 col-md-push-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toPage(page) {
      window.location.href = page;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/bootstrap.min.css";
@import "~@/assets/styles/default.css";
@import "~@/assets/styles/bootstrap-vertical-menu.css";
.views {
  box-sizing: border-box;
  padding-left: 180px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 50px;
}
.navbar-nav {
  li {
    a {
      cursor: pointer;
      i,
      span {
        display: inline-block;
      }
      i {
        svg {
        }
        margin-right: 10px;
      }
    }
  }
}
</style>