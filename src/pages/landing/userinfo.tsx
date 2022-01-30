import Radio from "../../components/radio";
import React, { useState, useEffect } from "react";
import QuizTypes from "../../enums/quiztypes";
import Button from "../../components/button";
import TextBox from "../../components/textbox";
import Card from "../../components/card";
import UserInfo from "../../modals/userinfo";

const logo = require("../../assets/img/logo.png");

interface Props {
  onLaunchClicked: (userInfo: UserInfo) => void;
  userInfo?: UserInfo;
}

const UserInfoCard: React.FC<Props> = (props) => {
  const [username, setUsername] = useState<string>("");
  const [quizType, setQuizType] = useState<QuizTypes>(QuizTypes.Beginner);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  useEffect(() => {
    if (props.userInfo) {
      setQuizType(props.userInfo.type);
      setUsername(props.userInfo.username);
    }
  }, [props.userInfo]);

  const onQuizTypeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizType(+e.target.value);
  };

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsInvalid(false);
    setUsername(e.target.value);
  };

  const onLaunchClicked = () => {
    if (username.trim() === "") {
      setIsInvalid(true);
      return;
    }

    props.onLaunchClicked({ type: quizType, username: username } as UserInfo);
  };

  return (
    <Card>
      <h1 className="landing__title">
        <img src={logo} alt="Logo" className="landing__logo" />
        <span className="landing__title-main">JS Quiz</span>
      </h1>
      <h2 className="landing__title-sub">
        Welcome to JavaScript quiz. Let's prove your skill level !!
      </h2>
      <div className="landing__user-info">
        <div>
          <TextBox
            value={username}
            placeholder="Enter your name"
            onChange={onUsernameChange}
            className={isInvalid ? "error nodding-animate" : ""}
          />
        </div>
        <ul className="radio-group">
          <li className="radio-group__item">
            <Radio
              name="level"
              text="Beginner"
              id="radio-beginner"
              value={QuizTypes.Beginner}
              onChange={onQuizTypeChanged}
              checked={quizType === QuizTypes.Beginner}
            />
          </li>
          <li className="radio-group__item">
            <Radio
              name="level"
              text="Intermediate"
              id="radio-intermediate"
              value={QuizTypes.Intermediate}
              onChange={onQuizTypeChanged}
              checked={quizType === QuizTypes.Intermediate}
            />
          </li>
          <li className="radio-group__item">
            <Radio
              name="level"
              text="Master"
              id="radio-master"
              value={QuizTypes.Master}
              onChange={onQuizTypeChanged}
              checked={quizType === QuizTypes.Master}
            />
          </li>
        </ul>
        <div className="button-holder">
          <Button text="Launch" size="large" onClick={onLaunchClicked} />
        </div>
      </div>
    </Card>
  );
};

export default UserInfoCard;
