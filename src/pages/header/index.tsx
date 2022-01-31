import React from "react";
import UserInfo from "../../modals/userinfo";

const logo = require("../../assets/img/logo.png");

interface Props {
  userInfo?: UserInfo;
}

const Header: React.FC<Props> = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">
        <img src={logo} alt="Logo" className="header__logo" />
        <span className="header__title-main">JS Quiz</span>
      </h1>
      <section className="header__userinfo">
        <div className="header__userinfo__username">
          {props.userInfo?.username}
        </div>
      </section>
    </header>
  );
};

export default Header;
