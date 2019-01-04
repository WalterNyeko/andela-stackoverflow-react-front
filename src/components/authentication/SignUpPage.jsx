import React, { Component } from "react";
import SingleQuestionComponent from "../questions/SingleQuestionComponent";
import SignUpFormComponent from "./SignUpFormComponent";

export default class SignUpPage extends Component {
  render() {
    return (
      <div className="col-md-7 main-content">
        <div className="questions">
          <SignUpFormComponent />
          <SingleQuestionComponent />
        </div>
      </div>
    );
  }
}
