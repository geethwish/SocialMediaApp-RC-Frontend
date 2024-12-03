import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../../../services/api";
import { ApiStatus, Post } from "../../../types/index";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  return await getPosts();
});

const getPostsSlice = createSlice({
  name: "allPosts",
  initialState: {
    posts: [] as Post[],
    status: "idle" as ApiStatus,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload.reverse();
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const selectAllPosts = (state: { posts: { posts: Post[] } }) =>
  state.posts.posts;
export const selectPostsStatus = (state: { posts: { status: ApiStatus } }) =>
  state.posts.status;
export const selectPostsError = (state: { posts: { error: string } }) =>
  state.posts.error;

export default getPostsSlice.reducer;
