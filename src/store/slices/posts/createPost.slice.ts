import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts, createPost } from "../../../services/api";
import { Post } from "../../../types/index";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  return await getPosts();
});

export const addPost = createAsyncThunk("posts/addPost", async (post: Post) => {
  return await createPost(post);
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [] as Post[],
    status: "idle",
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
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export default postsSlice.reducer;
