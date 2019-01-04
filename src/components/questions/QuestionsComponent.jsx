import React from "react";
import RightSideBar from "../utils/RightSideBar";
import LeftSideBar from "../utils/LeftSideBar";
import MiddleSection from "./MiddleSection";
import Footer from "../utils/Footer";

export const QuestionsComponent = () => {
  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <LeftSideBar />
            <MiddleSection />
            <RightSideBar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
