import { Card } from "components/Card";
import { useSelector } from "react-redux";

export const Main = () => {
  const articles = useSelector((state) => state.cards.cards);

  return (
    <main className="main">
      <div className="wrapper">
        <div className="main__box">
          {articles.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
};
