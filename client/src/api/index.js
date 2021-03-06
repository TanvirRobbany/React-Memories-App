import axios from "axios";

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const create = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatePostData) => axios.patch(`${url}/${id}`, updatePostData);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/like-post`);