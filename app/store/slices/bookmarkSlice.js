import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addToBookmark(state, { payload }) {
      state.bookmarks = state.bookmarks.push(payload);
    },
    removeFromBookmark(state, { payload }) {
      state.bookmarks = state.bookmarks.filter((item) => item.id !== payload);
    },
  },
});

export const { login, logout } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
