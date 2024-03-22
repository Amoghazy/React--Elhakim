import { configureStore } from "@reduxjs/toolkit";
import authApiSlice from "./api/auth-api.js";
import tokenSlice from "./Slices/tokenSlice.js";
import userApiSlice from "./api/user-api.js";
import userInfoSlice from "./Slices/userInfoSlice.js";

const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    token: tokenSlice,
    userInfo: userInfoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      userApiSlice.middleware
    ),
});

export default store;
