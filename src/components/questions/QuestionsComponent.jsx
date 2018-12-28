import React from "react";
import SingleQuestionComponent from "./SingleQuestionComponent";
import RightSideBar from "../utils/RightSideBar";
import LeftSideBar from "../utils/LeftSideBar";
import Footer from "../utils/Footer";

export default function QuestionsComponent() {
  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <RightSideBar />
            <div className="col-md-7 main-content">
              <div className="body-header pt-4 pb-2 clearfix">
                <div className="top-question float-left">
                  <h4>Top Questions</h4>
                </div>
                <div className="ask-question float-right">
                  <button className="btn btn-primary">Ask Question</button>
                </div>
              </div>
              <div className="questions">
                <SingleQuestionComponent />
              </div>
            </div>
            <LeftSideBar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
