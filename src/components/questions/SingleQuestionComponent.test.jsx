import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import questionsReducer from "../../store/reducers/questions";
import { FETCH_QUESTIONS, POST_QUESTION } from "../../store/types";
import SingleQuestionComponent, {
  SingleQuestionComponent as SingleQuestionComponentTest
} from "./SingleQuestionComponent";

// const initialState = { questions: { questions: {} } };
const mockStore = configureStore([thunk])({ questions: { questions: {} } });
describe("", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter>
        <Provider store={mockStore}>
          <SingleQuestionComponent
            fetchQuestions={jest.fn}
            fetchQuestion={jest.fn}
            questions={[
              {
                question_ask_date: "12/12/2018",
                question_author: "hh",
                question_body: "The explanation is here",
                question_id: 24,
                question_title: "My Own Question"
              }
            ]}
          />
        </Provider>
      </MemoryRouter>
    );
  });

  it("should call handleSubmit method ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should return the initial state", () => {
    expect(questionsReducer(undefined, {})).toEqual({
      question: {},
      questions: []
    });
  });

  it("should handle FETCH_QUESTIONS", () => {
    const startAction = {
      type: FETCH_QUESTIONS
    };

    expect(questionsReducer(null, startAction)).toEqual({});
  });

  it("should handle POST_QUESTION", () => {
    const payload = {
      question_title: "ghghgh",
      question_body: "pshdfhdh",
      question_author: "nyeko1"
    };

    const startAction = {
      type: POST_QUESTION,
      payload
    };

    expect(questionsReducer(null, startAction)).toEqual({ question: payload });
  });
});
