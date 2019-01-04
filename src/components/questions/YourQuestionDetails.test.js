import { shallow } from "enzyme";
import React from "react";
import { YourQuestionDetails } from "./YourQuestionDetails";

describe("YourQuestionDetails", () => {
  it("tests that the YourQuestionDetails renders correctly", () => {
    const wrapper = shallow(<YourQuestionDetails />);
  });
});
