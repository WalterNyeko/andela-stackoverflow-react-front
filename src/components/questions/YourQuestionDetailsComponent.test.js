import { shallow } from "enzyme";
import React from "react";
import { YourQuestionDetailsComponent } from "./YourQuestionDetailsComponent";

describe("YourQuestionDetailsComponent", () => {
  it("tests that the YourQuestionDetailsComponent renders correctly", () => {
    const wrapper = shallow(<YourQuestionDetailsComponent />);
  });
});
