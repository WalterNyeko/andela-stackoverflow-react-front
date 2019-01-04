import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/RootReducer";
export default createStore(rootReducer, applyMiddleware(thunk));
