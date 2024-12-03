import api from "./axiosInterceptor";
import { Post, Comment } from "../types";

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get("posts");
  return response.data;
};

export const getPostById = async (id: string): Promise<Post> => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (
  post: Omit<Post, "id" | "createdAt">
): Promise<Post> => {
  const response = await api.post("/posts", post);
  return response.data;
};

export const getCommentsByPostId = async (
  postId: string
): Promise<Comment[]> => {
  const response = await api.get(`/comments/post/${postId}`);
  return response.data;
};

export const createComment = async (
  comment: Omit<Comment, "id" | "createdAt">
): Promise<Comment> => {
  const response = await api.post("/comments", comment);
  return response.data;
};
