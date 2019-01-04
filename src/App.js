import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import HomePage from "./components/utils/HomePage";
import { AskYourQuestion } from "./components/questions/AskYourQuestion";
import { YourQuestionDetails } from "./components/questions/YourQuestionDetails";
import { LoginContainer } from "./components/authentication/LoginContainer";
import { SignUpContainer } from "./components/authentication/SignUpContainer";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/question" exact component={AskYourQuestion} />
            <Route path="/question/1" exact component={YourQuestionDetails} />
            <Route path="/users/login" exact component={LoginContainer} />
            <Route path="/users/signup" exact component={SignUpContainer} />
          </Switch>
        </BrowserRouter>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
