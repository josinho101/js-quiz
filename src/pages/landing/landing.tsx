import UserInfo from "../../modals/userinfo";
import UserInfoCard from "./userinfo";
import { useState } from "react";
import AppSections from "../../enums/appsections";
import Instructions from "./instructions";
import Questionnaire from "../questionnaire";

const LandingPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [appSection, setAppSection] = useState<AppSections>(
    AppSections.UserInfo
  );

  const onUserInfoLaunchClicked = (userInfo: UserInfo) => {
    setUserInfo(userInfo);
    setAppSection(AppSections.Instructions);
  };

  const onInstructionsBackClicked = () => {
    setAppSection(AppSections.UserInfo);
  };

  const onInstructionsStartClicked = () => {
    setAppSection(AppSections.Questionnaire);
  };

  const renderAppSection = () => {
    switch (appSection) {
      case AppSections.UserInfo:
        return (
          <UserInfoCard
            onLaunchClicked={onUserInfoLaunchClicked}
            userInfo={userInfo}
          />
        );
      case AppSections.Instructions:
        return (
          <Instructions
            onBackClicked={onInstructionsBackClicked}
            onStartClicked={onInstructionsStartClicked}
          />
        );
      case AppSections.Questionnaire:
        return <Questionnaire userInfo={userInfo} />;
      default:
        return null;
    }
  };

  return renderAppSection();
};

export default LandingPage;
