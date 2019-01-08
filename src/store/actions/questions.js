import { toast } from "react-toastify";
import {
  FETCH_QUESTION,
  FETCH_QUESTIONS,
  POST_QUESTION,
  POST_ANSWER
} from "../types";

export const fetchQuestions = () => dispatch => {
  fetch("https://stackoverflow-lite-two.herokuapp.com/api/v1/questions", {
    method: "GET"
  })
    .then(resp => resp.json())
    .then(questions => {
      console.log(questions);
      dispatch({
        type: FETCH_QUESTIONS,
        payload: questions
      });
    });
};
export const fetchQuestion = id => dispatch => {
  fetch(`https://stackoverflow-lite-two.herokuapp.com/api/v1/questions/${id}`, {
    method: "GET"
  })
    .then(resp => resp.json())
    .then(question => {
      dispatch({
        type: FETCH_QUESTION,
        payload: question
      });
    });
};
export const postQuestion = body => dispatch => {
  fetch("https://stackoverflow-lite-two.herokuapp.com/api/v1/questions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(body)
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.Message === "Question Posted Successfully") {
        toast.success(data.Message, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.error(data.Message, {
          position: toast.POSITION.TOP_CENTER
        });
        toast.error(data.msg, {
          position: toast.POSITION.TOP_CENTER
        });
      }
      dispatch({
        type: POST_QUESTION,
        payload: data
      });
      dispatch(fetchQuestions());
    });
};

export const postAnswer = data => dispatch => {
  const { answer_body, id } = data;

  console.log("nndnfnfnfnf...", answer_body);
  const body = {
    answer_body
  };
  console.log(body);
  fetch(
    `https://stackoverflow-lite-two.herokuapp.com/api/v1/questions/${id}/answers`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(body)
    }
  )
    .then(resp => resp.json())
    .then(data => {
      if (data.Message === "Answer posted successfully") {
        toast.success(data.Message, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.error(data.Message, {
          position: toast.POSITION.TOP_CENTER
        });
        toast.error(data.msg, {
          position: toast.POSITION.TOP_CENTER
        });
      }
      dispatch({
        type: POST_ANSWER,
        payload: data
      });
      dispatch(fetchQuestion(id));
    });
};
