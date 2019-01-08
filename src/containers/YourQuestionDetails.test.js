import { shallow } from "enzyme";
import React from "react";
import YourQuestionDetails from "./YourQuestionDetails";

describe("YourQuestionDetails", () => {
  let wrapper;
  it("tests that the YourQuestionDetails renders correctly", () => {
    wrapper = shallow(<YourQuestionDetails postAnswer={jest.fn} />);
  });
  //   it("should call handleSubmit method ", () => {
  //     wrapper.instance().handleSubmit({ preventDefault: jest.fn });
  //   });

  //   it("should call onchange method ", () => {
  //     wrapper
  //       .instance()
  //       .onChange({ target: { name: "answer_body", value: "my value" } });
  //   });
});
