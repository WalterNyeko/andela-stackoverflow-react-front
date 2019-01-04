import React from "react";
import { shallow } from "enzyme";
import { LoginFormComponent } from "./LoginFormComponent";
describe("SignUpFormComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginFormComponent loginUser={jest.fn} />);
  });

  it("should call handleSubmit method ", () => {
    wrapper.instance().handleSubmit({ preventDefault: jest.fn });
  });

  it("should call onchange method ", () => {
    wrapper
      .instance()
      .onChange({ target: { name: "username", value: "my name" } });
  });
});
