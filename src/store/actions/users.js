import { toast } from "react-toastify";
import { push } from "react-router-redux";
import { SIGN_UP_USER, LOGIN_USER } from "../types";

export const signUpUser = userData => dispatch => {
  fetch("https://stackoverflow-lite-two.herokuapp.com/api/v1/auth/signup", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(resp => resp.json())
    .then(usersPayload => {
      if (usersPayload.Message === "User Created successfully") {
        toast.success(usersPayload.Message, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.error(usersPayload.Message, {
          position: toast.POSITION.TOP_CENTER
        });
      }
      dispatch({
        type: SIGN_UP_USER,
        payload: usersPayload
      });
      dispatch(push("/foo"));
    });
};

export const loginUser = body => dispatch => {
  fetch("https://stackoverflow-lite-two.herokuapp.com/api/v1/auth/login", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.Token);
      console.log(data);
      if (data.Message === "Successfully Logged In") {
        toast.success(data.Message, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        toast.error(data.Message, {
          position: toast.POSITION.TOP_CENTER
        });
      }
      dispatch({
        type: LOGIN_USER,
        payload: data
      });
    });
};
