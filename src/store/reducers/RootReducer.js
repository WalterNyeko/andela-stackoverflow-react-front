import { combineReducers } from "redux";
import questionReducer from "../reducers/questions";
import usersReducer from "../reducers/users";

export default combineReducers({
  questions: questionReducer,
  users: usersReducer
});
