import "components/components.css";

export const HeadBar = () => {
  return (
    <div className="head-bar">
      <div className="logo-box">
        <div className="logo-box__logo">
          <img src="images/logo.svg" alt="logo" />
        </div>
        <div className="logo-box__name">
          <img src="images/companyName.svg" alt="company name" />
        </div>
      </div>
      <div className="communication-box">
        <div className="communication-box__phone-number">8 800 000 00 00</div>
        <div className="communication-box__mail">sales@logo.ru</div>
        <div className="communication-box__icon">
          <img src="images/phone.svg" alt="phone" />
        </div>
        <div className="communication-box__icon">
          <img src="images/mail.svg" alt="mail" />
        </div>
      </div>
    </div>
  );
};
