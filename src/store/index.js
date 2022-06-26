import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articlesSlice";

const store = configureStore({
  reducer: { articles: articlesReducer, newArticles: articlesReducer },
});

export default store;
