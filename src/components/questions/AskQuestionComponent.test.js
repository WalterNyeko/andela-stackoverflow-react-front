import React from "react";
import { shallow } from "enzyme";
import { AskQuestionComponent } from "./AskQuestionComponent";

describe("AskQuestionComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AskQuestionComponent postQuestion={jest.fn} />);
  });

  it("should call handleSubmit method ", () => {
    wrapper.instance().handleSubmit({ preventDefault: jest.fn });
  });

  it("should call onchange method ", () => {
    wrapper
      .instance()
      .onChange({ target: { name: "question_title", value: "my name" } });
  });
});
