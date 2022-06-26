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

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    newArticles: [],
    status: null,
    error: null,
  },
  reducers: {
    filterByAuthors(state, action) {
      state.newArticles = state.articles.filter(
        (article) => article.author !== action.payload.selectedAuthor
      );
    },
  },
  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchArticles.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.articles = action.payload.articles;
    },
    [fetchArticles.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const { filterByAuthors } = articlesSlice.actions;
export default articlesSlice.reducer;
