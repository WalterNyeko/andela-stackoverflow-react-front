import React, { Component } from "react";
import SingleQuestionComponent from "./SingleQuestionComponent";
import AskQuestionComponent  from "./AskQuestionComponent";

export default class AskQuestionPage extends Component {
  render() {
    return (
      <div className="col-md-7 main-content">
        <div className="body-header pt-4 pb-2 clearfix">
          <div className="top-question float-left">
            <h4>Your Question</h4>
          </div>
        </div>

        <div className="questions">
          <AskQuestionComponent />
          <SingleQuestionComponent />
        </div>
      </div>
    );
  }
}
