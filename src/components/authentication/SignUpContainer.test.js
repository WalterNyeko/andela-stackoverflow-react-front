import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import {SignUpContainer} from "./SignUpContainer";


describe("SignUpContainer", () => {
  it("tests that the signup page component renders correctly", () => {
    const wrapper = shallow(<SignUpContainer />);
  });
});
