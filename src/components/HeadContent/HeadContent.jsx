import { Button } from "components/Button";

export const HeadContent = () => {
  return (
    <div className="head-main">
      <div className="head-main__content">
        <div className="head-main__box">
          <h2 className="head-main__title">
            Как бизнесу сохранять IT-кадры на фоне кризиса
          </h2>
          <p className="head-main__paragraph">
            Инструменты, которые могут использовать компании для удержания
            сотрудников
          </p>
          <Button type="button">Подробнее</Button>
          <div className="head-main__radio">
            <input
              className="radio"
              type="radio"
              name="slide"
              id="one"
              defaultChecked
            />
            <label className="custom-radio" htmlFor="one"></label>
            <input className="radio" type="radio" name="slide" id="two" />
            <label className="custom-radio" htmlFor="two"></label>
            <input className="radio" type="radio" name="slide" id="three" />
            <label className="custom-radio" htmlFor="three"></label>
          </div>
        </div>
        <div className="head-main__wallpaper">
          <img
            className="head-main__img"
            src="images/pcUser.png"
            alt="pc user"
          />
        </div>
      </div>
    </div>
  );
};
