import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const articlesApi = "https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc";

export const fetchArticles = createAsyncThunk(
  "users/fetchArticles",
  async function () {
    const articlesResponse = await fetch(articlesApi);
    const articlesData = articlesResponse.json();
    return articlesData;
  }
);

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    status: null,
    error: null,
  },
  reducer: {},
  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchArticles.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.cards = action.payload.articles;
    },
    [fetchArticles.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default cardSlice.reducer;
