import React, { Component } from "react";
import QuestionDetailsComponent from "../questions/QuestionDetailsComponent";

export default class QuestionDetails extends Component {
  render() {
    return (
      <div className="col-md-12 main-content-details">
        <div className="body-header-details pt-4 pb-2 clearfix">
          <div className="top-question float-left">
            <h4>Your Question</h4>
          </div>
        </div>

        <div className="questions">
          <QuestionDetailsComponent />
        </div>
      </div>
    );
  }
}
