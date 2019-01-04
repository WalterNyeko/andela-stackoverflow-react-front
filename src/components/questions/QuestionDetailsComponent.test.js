import { shallow } from "enzyme";
import React from "react";
import QuestionDetailsComponent from "./QuestionDetailsComponent";

describe("QuestionDetailsComponent", () => {
  it("tests that the QuestionDetailsComponent renders correctly", () => {
    const wrapper = shallow(<QuestionDetailsComponent />);
  });
});
