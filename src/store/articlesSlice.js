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
    articlesContainer: [],
    status: null,
    error: null,
  },
  reducers: {
    filterByAuthors(state, action) {
      state.articles = state.articlesContainer.filter((article) =>
        article.author === null
          ? null
          : article.author.includes(action.payload.selectedAuthor)
      );
    },
    filterByDate(state, action) {
      state.articles = state.articlesContainer.filter(
        (article) =>
          new Date(article.publishedAt).toISOString() >
          action.payload.selectDate
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
      state.articlesContainer = action.payload.articles;
    },
    [fetchArticles.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const { filterByAuthors, filterByDate } = articlesSlice.actions;
export default articlesSlice.reducer;
