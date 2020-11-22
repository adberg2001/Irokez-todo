import { combineReducers } from "redux";
import currentUserReducer from "./currentUserReducer";
import tasksReducer from "./tasksReducer"
import isLoadingReducer from "./isLoadingReducer";

export default combineReducers({
  currentUser: currentUserReducer,
  tasks: tasksReducer,
  loading: isLoadingReducer
});
