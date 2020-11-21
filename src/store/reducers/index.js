import { combineReducers } from "redux";
import currentUserReducer from "./currentUserReducer";
import tasksReducer from "./tasksReducer"

export default combineReducers({
  currentUser: currentUserReducer,
  tasks: tasksReducer,
});
