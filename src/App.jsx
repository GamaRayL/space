import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Article from "components/Article";
import Filter from "components/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "store/articlesSlice";
import "./App.css";

function App() {
  const newArticles = useSelector((state) => state.newArticles.newArticles);
  const articles = useSelector((state) => state.articles.articles);
  const authors = articles.map((article) => article.author);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="app">
      <Container>
        <Filter authors={authors} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          {newArticles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default App;
