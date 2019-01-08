import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import HomePage from "./components/utils/HomePage";
import { AskYourQuestion } from "./components/questions/AskYourQuestion";
import YourQuestionDetails from "./containers/YourQuestionDetails";
import { LoginContainer } from "./components/authentication/LoginContainer";
import { SignUpContainer } from "./components/authentication/SignUpContainer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/question" exact component={AskYourQuestion} />
              <Route
                path="/questions/:id"
                exact
                component={YourQuestionDetails}
              />
              <Route path="/users/login" exact component={LoginContainer} />
              <Route path="/users/signup" exact component={SignUpContainer} />
            </Switch>
          </BrowserRouter>
          <ToastContainer />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
