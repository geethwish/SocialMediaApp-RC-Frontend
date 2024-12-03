import api from "./axiosInterceptor";
import { Post, Comment } from "../types";

// Get all posts
export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get("posts");
  return response.data;
};

// Create a new post
export const createPost = async (
  post: Omit<Post, "id" | "createdAt">
): Promise<Post> => {
  const response = await api.post("/posts", post);
  return response.data;
};

// Update a post
export const getCommentsByPostId = async (
  postId: string
): Promise<Comment[]> => {
  try {
    const response = await api.get(`/comments/post/${postId}`);
    return response.data;
  } catch {
    throw new Error("Failed to fetch comments. Please try again.");
  }
};

// Crate a new comment
export const createComment = async (
  comment: Omit<Comment, "id" | "createdAt">
): Promise<Comment> => {
  const response = await api.post("/comments", comment);
  return response.data;
};
