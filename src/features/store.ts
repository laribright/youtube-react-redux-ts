import { configureStore } from "@reduxjs/toolkit";

import postSlice from "./posts/postSlice";

const store = configureStore({
  reducer: postSlice,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
