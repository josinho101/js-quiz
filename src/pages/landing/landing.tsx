import UserInfo from "../../modals/userinfo";
import UserInfoCard from "./userinfo";
import { useState } from "react";
import AppSections from "../../enums/appsections";
import Instructions from "./instructions";

const LandingPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [appSection, setAppSection] = useState<AppSections>(
    AppSections.UserInfo
  );

  const onUserInfoLaunchClicked = (userInfo: UserInfo) => {
    setUserInfo(userInfo);
    setAppSection(AppSections.Instructions);
  };

  const renderAppSection = () => {
    switch (appSection) {
      case AppSections.UserInfo:
        return <UserInfoCard onLaunchClicked={onUserInfoLaunchClicked} />;
      case AppSections.Instructions:
        return <Instructions />;
      default:
        return null;
    }
  };

  return renderAppSection();
};

export default LandingPage;
