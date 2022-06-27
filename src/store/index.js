import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articlesSlice";

const store = configureStore({
  reducer: { articles: articlesReducer, articlesContainer: articlesReducer },
});

export default store;
