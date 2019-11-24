import _axios from "../utils/axios";
const base = "http://127.0.0.1:9001";
export function getPostList() {
  return _axios(`${base}/blogapi/post/getPostList`);
}
export function getPost(id) {
  return _axios(`${base}/blogapi/post/getPost/${id}`);
}
export function getMorePost({ page, pageNum }) {
  return _axios(`${base}/blogapi/post/getPostList`, {
    page,
    pageNum
  });
}
export function getArchive() {
  return _axios(`${base}/blogapi/post/getArchive`);
}
export function getCategory({ id, page, pageNum }) {
  return _axios(`${base}/blogapi/post/category/${id}`, { page, pageNum });
}
export function getTags({ id, page, pageNum }) {
  return _axios(`${base}/blogapi/post/tag/${id}`, { page, pageNum });
}
export function getItems() {
  return _axios(`${base}/blogapi/post/getLaboratory`);
}
