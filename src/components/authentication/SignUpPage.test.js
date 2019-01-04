import React from "react";
import { shallow } from "enzyme";
import SignUpPage from "./SignUpPage";

describe("SignUpPage", () => {
  it("tests that the signup page component renders correctly", () => {
    const wrapper = shallow(<SignUpPage />);
  });
});
