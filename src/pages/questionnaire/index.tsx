import React from "react";
import Card from "../../components/card";
import UserInfo from "../../modals/userinfo";
import Footer from "../footer";
import Header from "../header";

interface Props {
  userInfo?: UserInfo;
}

const Questionnaire: React.FC<Props> = (props) => {
  return (
    <>
      <Header userInfo={props.userInfo}></Header>
      <Card></Card>
      <Footer />
    </>
  );
};

export default Questionnaire;
