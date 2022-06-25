import { Button } from "components/Button";

export const Card = ({ article }) => {
  return (
    <div className="card">
      <div className="card__date">{article.publishedAt}</div>
      <h3 className="card__title">{article.title}</h3>
      <p className="card__paragraph">
        {article.description.slice(0, 100) + "..."}
      </p>
      <Button buttonStyle="btn--second--contained" buttonSize="btn--small">
        {article.author}
      </Button>
    </div>
  );
};

/* "author": "n-tv NACHRICHTEN",
"title": "Verhandlungen laufen: Twitter soll sich mit Musk-Übernahme anfreunden",
"description": "Twitter scheint nun doch nicht mehr so abgeneigt, an  Elon Musk zu verkaufen. Das berichten zumindest mehrere US-Medien. Nachdem der Tech-Milliardär vor einigen Tagen neue Finanzierungszusagen präsentiert, sollen jetzt bereits Verhandlungen laufen.",
"url": "https://www.n-tv.de/wirtschaft/Twitter-soll-sich-mit-Musk-Ubernahme-anfreunden-article23287307.html",
"urlToImage": "https://bilder3.n-tv.de/img/incoming/crop23287306/073132179-cImg_16_9-w1200/283700215.jpg",
"publishedAt": "2022-04-25T05:33:43Z",
"content": "Twitter scheint nun doch nicht mehr so abgeneigt, an Elon Musk zu verkaufen. Das berichten zumindest mehrere US-Medien. Nachdem der Tech-Milliardär vor einigen Tagen neue Finanzierungszusagen präsent… [+2223 chars]" */
