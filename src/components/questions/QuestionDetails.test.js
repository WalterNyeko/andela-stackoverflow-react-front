import { shallow } from "enzyme";
import React from "react";
import QuestionDetails from "./QuestionDetails";

describe("QuestionDetails", () => {
  it("tests that the QuestionDetails renders correctly", () => {
    const wrapper = shallow(<QuestionDetails />);
  });
});
