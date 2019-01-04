import React from "react";
import { shallow } from "enzyme";
import { LoginContainer } from "./LoginContainer";

describe("SignUpFormComponent", () => {
  it("tests that the signup page component renders correctly", () => {
    const wrapper = shallow(<LoginContainer />);
  });
});
