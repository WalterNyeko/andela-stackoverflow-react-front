import React from "react";
import { shallow } from "enzyme";
import LoginPage from "./LoginPage";
window.React = React;
describe("SignUpFormComponent", () => {
  it("tests that the signup page component renders correctly", () => {
    const wrapper = shallow(<LoginPage />);
  });
});
