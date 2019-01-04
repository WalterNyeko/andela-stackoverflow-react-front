import React from "react";
import { shallow } from "enzyme";
import { SignUpFormComponent } from "./SignUpFormComponent";
import { SIGN_UP_USER, LOGIN_USER } from "../../store/types";
import signUpUser from "../../store/actions/users";
import usersReducer from "../../store/reducers/users";
import * as actions from "../../store/actions/users";

describe("SignUpFormComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignUpFormComponent signUpUser={jest.fn} />);
  });

  it("should call handleSubmit method ", () => {
    wrapper.instance().handleSubmit({ preventDefault: jest.fn });
  });

  it("should call onchange method ", () => {
    wrapper
      .instance()
      .onChange({ target: { name: "username", value: "my name" } });
  });

  test("should return the initial state", () => {
    expect(usersReducer(undefined, {})).toEqual({
      user_login: {},
      user_signup: {}
    });
  });

  it("should handle SIGN_UP_USER", () => {
    const payload = {
      username: "ghghgh",
      email: "email@gmail.com",
      password: "pshdfhdh"
    };

    const startAction = {
      type: SIGN_UP_USER,
      payload
    };

    expect(usersReducer(null, startAction)).toEqual({ user_signup: payload });
  });

  it("should handle LOGIN_USER", () => {
    const payload = {
      username: "ghghgh",
      password: "pshdfhdh"
    };

    const startAction = {
      type: LOGIN_USER,
      payload
    };

    expect(usersReducer(null, startAction)).toEqual({ user_login: payload });
  });
});
