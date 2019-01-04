import React from "react";
import RightSideBar from "../utils/RightSideBar";
import LeftSideBar from "../utils/LeftSideBar";
import Footer from "../utils/Footer";
import DefaultLayout from "../utils/DefaultLayout";
import QuestionDetails from "../questions/QuestionDetails";

export const YourQuestionDetails = () => {
  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          <DefaultLayout />
          <div className="row">
            <LeftSideBar />
            <QuestionDetails />
            <RightSideBar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
