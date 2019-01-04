import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import configureStore from "../../store/store";
import SingleQuestionComponent from "./SingleQuestionComponent";

export default class MiddleSection extends Component {
  render() {
    return (
      <div className="col-md-7 main-content">
        <div className="body-header pt-4 pb-2 clearfix">
          <div className="top-question float-left">
            <h4>Top Questions</h4>
          </div>
          <div className="ask-question float-right">
            <NavLink to={`/question`}>
              <button className="btn btn-primary">Ask Question</button>
            </NavLink>
          </div>
        </div>

        <div className="questions">
          <SingleQuestionComponent />
        </div>
      </div>
    );
  }
}
