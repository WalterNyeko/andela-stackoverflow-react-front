import { shallow } from "enzyme";
import React from "react";
import { AskYourQuestion } from "./AskYourQuestion";

describe("AskYourQuestion", () => {
  it("tests that the AskYourQuestion renders correctly", () => {
    const wrapper = shallow(<AskYourQuestion />);
  });
});
