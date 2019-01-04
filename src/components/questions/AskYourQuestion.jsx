import React from "react";
import RightSideBar from "../utils/RightSideBar";
import LeftSideBar from "../utils/LeftSideBar";
import Footer from "../utils/Footer";
import AskQuestionPage from "./AskQuestionPage";
import DefaultLayout from "../utils/DefaultLayout";

export const AskYourQuestion = () => {
  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          <DefaultLayout />
          <div className="row">
            <LeftSideBar />
            <AskQuestionPage />
            <RightSideBar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
