import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";

const store = configureStore({
  // this is reducer
  reducer: {
    users: userSlice, // users is root reducer
  },
});

export default store;
