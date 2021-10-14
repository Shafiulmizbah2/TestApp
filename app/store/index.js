import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import bookmarkReducer from "./slices/bookmarkSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    bookmark: bookmarkReducer,
  },
});
