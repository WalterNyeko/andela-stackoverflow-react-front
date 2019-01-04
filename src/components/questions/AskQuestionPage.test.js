import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import AskQuestionPage from "./AskQuestionPage";
window.React = React;
describe("AskQuestionPage", () => {
  it("tests that the ask question page component renders correctly", () => {
    const wrapper = shallow(<AskQuestionPage />);
  });
});
