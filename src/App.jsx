import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Article from "components/Article";
import DataTimePicker from "components/DataTimePicker";
import Filter from "components/Filter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "store/articlesSlice";
import { filterByAuthors } from "store/articlesSlice";
import "./App.css";

function App() {
  const articles = useSelector((state) => state.articles.articles);
  const status = useSelector((state) => state.articles.status);
  const [isAuthor, setIsAuthor] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const handleChange = (event) => {
    const selectedAuthor = event.target.value;
    setIsAuthor(selectedAuthor);
    dispatch(filterByAuthors({ selectedAuthor }));
  };

  return (
    <div className="app">
      <Container>
        {status === "loading" ? (
          <div>Загрузка...</div>
        ) : (
          <>
            <DataTimePicker />
            <Filter
              handleChange={handleChange}
              isAuthor={isAuthor}
              articles={articles}
            />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "15px",
              }}
            >
              {articles.map((article, index) => (
                <Article
                  handleChange={handleChange}
                  key={index}
                  article={article}
                />
              ))}
            </Box>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
