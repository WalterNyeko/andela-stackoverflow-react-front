import React, { Component } from "react";
import SingleQuestionComponent from "../questions/SingleQuestionComponent";
import LoginFormComponent from "../authentication/LoginFormComponent";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="col-md-7 main-content">
        <div className="questions">
          <LoginFormComponent />
          <SingleQuestionComponent />
        </div>
      </div>
    );
  }
}
