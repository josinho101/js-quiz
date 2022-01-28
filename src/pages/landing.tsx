import Radio from "../components/radio";
import { useState } from "react";
import UserType from "../enums/usertype";
import Button from "../components/button";

const logo = require("../assets/img/logo.png");

const Landing = () => {
  const [userType, setUserType] = useState<UserType>(UserType.Beginner);
  const [username, setUsername] = useState<String>("");

  const onUserTypeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(+e.target.value);
  };

  const onLaunchClicked = (e: React.MouseEvent<HTMLElement>) => {};

  return (
    <header className="header">
      <h1 className="header__title">
        <img src={logo} alt="Logo" className="header__logo" />
        <span className="header__title-main">JS Quiz</span>
      </h1>
      <div className="header__title-sub">
        Welcome to JavaScript quiz. Let's prove your skill level !!
      </div>
      <div className="header__user-info">
        <div>
          <input
            type="text"
            className="header__user-info-textbox"
            placeholder="Enter your name"
          />
        </div>
        <ul className="radio-group">
          <li className="radio-group__items">
            <Radio
              name="level"
              text="Beginner"
              id="radio-beginner"
              value={UserType.Beginner}
              onChange={onUserTypeChanged}
              checked={userType === UserType.Beginner}
            />
          </li>
          <li className="radio-group__items">
            <Radio
              name="level"
              text="Intermediate"
              id="radio-intermediate"
              value={UserType.Intermediate}
              onChange={onUserTypeChanged}
              checked={userType === UserType.Intermediate}
            />
          </li>
          <li className="radio-group__items">
            <Radio
              name="level"
              text="Master"
              id="radio-master"
              value={UserType.Master}
              onChange={onUserTypeChanged}
              checked={userType === UserType.Master}
            />
          </li>
        </ul>
        <div className="button-holder">
          <Button text="Launch" size="large" onClick={onLaunchClicked} />
        </div>
      </div>
    </header>
  );
};

export default Landing;
