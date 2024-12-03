import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../../types/index";
import { createPost } from "../../../services/api";

export const addPost = createAsyncThunk("posts/addPost", async (post: Post) => {
  return await createPost(post);
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    status: "idle",
    error: null as string | null,
  },
  reducers: {
    resetCreatePostState: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addPost.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});
export const { resetCreatePostState } = postsSlice.actions;
export default postsSlice.reducer;
