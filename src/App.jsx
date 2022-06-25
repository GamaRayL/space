import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchArticles } from "store/cardSlice";
import { Header, Main, Footer } from "components/Page";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="wrap">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
