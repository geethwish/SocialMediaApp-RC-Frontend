import { configureStore } from "@reduxjs/toolkit";
import createPostsReducer from "./slices/posts/createPost.slice";
import getPostReducer from "./slices/posts/getPost.slice";

export const store = configureStore({
  reducer: { cratePost: createPostsReducer, posts: getPostReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
