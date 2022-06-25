/* eslint-disable jsx-a11y/anchor-is-valid */
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__container">
          <div className="footer__box">
            <div className="logo-box">
              <div className="logo-box__logo">
                <img src="images/logo2.svg" alt="logo" />
              </div>
              <div className="logo-box__name">
                <img src="images/companyName2.svg" alt="company name" />
              </div>
            </div>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Готовые решения
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  О нас
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Блог
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <span className="copyright">© ООО «Лого», 2008—2022</span>
            <div className="social">
              <div className="social__item">
                <img
                  className="social-img"
                  src="images/telegram.svg"
                  alt="social icon"
                />
              </div>
              <div className="social__item">
                <img
                  className="social-img"
                  src="images/vk.svg"
                  alt="social icon"
                />
              </div>
              <div className="social__item">
                <img
                  className="social-img"
                  src="images/twitter.svg"
                  alt="social icon"
                />
              </div>
              <div className="social__item">
                <img
                  className="social-img"
                  src="images/youtube.svg"
                  alt="social icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
