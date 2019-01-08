import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import { POST_QUESTION, FETCH_QUESTIONS } from "../types";
import {
  postQuestion,
  fetchQuestion,
  fetchQuestions
} from "../actions/questions";
const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Question Action Creators", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test("fetch questions is successful", () => {});
  test("fetch questions is not successful", () => {});

  test("fetch question is successful", () => {});
  test("fetch question is not successful", () => {});

  test("post question is successful", () => {});
  test("post question is not successful", () => {});
});
