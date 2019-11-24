import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 假定我们有一个可以返回 Promise 的
import {
  getPostList,
  getPost,
  getMorePost,
  getArchive,
  getCategory,
  getTags,
  getItems
} from "../api/index";

export function createStore() {
  return new Vuex.Store({
    state: {
      posts: [],
      post: {},
      postsNoMore: false,
      archive: {},
      categories: [],
      tags: [],
      items: []
    },
    actions: {
      getPostList({ commit }) {
        return getPostList().then(res => {
          if (res.success === 1) {
            commit("setPostList", res.posts);
          } else {
            alert("网络异常");
          }
        });
      },
      getPost({ commit }, id) {
        return getPost(id)
          .then(res => {
            if (res.success === 1) {
              commit("setPost", {
                post: res.post,
                tags: res.tags,
                prev: res.prev,
                next: res.next
              });
            } else {
              alert("网络异常");
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      getMorePost({ commit }, { page, pageNum }) {
        return getMorePost({ page, pageNum })
          .then(res => {
            if (res.success === 1) {
              commit("concatPost", { posts: res.posts, pageNum });
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      getArchive({ commit }) {
        return getArchive().then(res => {
          if (res.success === 1) {
            commit("setArchive", {
              categories: res.categories,
              tags: res.tags,
              times: res.times
            });
          }
        });
      },
      getCategory({ commit }, { id, page, pageNum }) {
        return getCategory({ id, page, pageNum })
          .then(res => {
            commit("setCategory", res.posts);
          })
          .catch(err => {
            console.log(err);
          });
      },
      getTags({ commit }, { id, page, pageNum }) {
        return getTags({ id, page, pageNum })
          .then(res => {
            commit("setTags", res.posts);
          })
          .catch(err => {
            console.log(err);
          });
      },
      getItems({ commit }) {
        return getItems()
          .then(res => {
            commit("setItems", res.posts);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    mutations: {
      setPostList(state, posts) {
        state.posts = posts;
      },
      concatPost(state, { posts, pageNum }) {
        if (posts.length < pageNum) {
          state.postsNoMore = true;
        }
        state.posts = state.posts.concat(posts);
      },
      setPost(state, { post, tags, next, prev }) {
        state.post = post;
        state.post.tags = tags;
        state.post.prev = prev;
        state.post.next = next;
      },
      setArchive(state, { categories, tags, times }) {
        state.archive.categories = categories;
        state.archive.tags = tags;
        state.archive.times = times;
      },
      setCategory(state, posts) {
        state.categories = posts;
      },
      setTags(state, posts) {
        state.tags = posts;
      },
      setItems(state, posts) {
        state.items = posts;
      }
    }
  });
}
