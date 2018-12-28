import React, { Component } from "react";
import DefaultLayout from "../utils/DefaultLayout";
import QuestionsComponent from "../questions/QuestionsComponent";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <DefaultLayout />
        <QuestionsComponent />
      </div>
    );
  }
}
