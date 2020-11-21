import fetchRequest from "../../fetch/configuratedFetch"
import {
  FETCH_TASKS,
} from "./actionTypes";

// {
//   email: "test13@irokez.me",
//     password: "GerQKfCv"
// }

export function fetchTasks() {
  return async(dispatch) => {
    try {
      const response = await fetchRequest("GET", 'todo/');
      dispatch(fetchTasksAction(response, "data"));
    } catch (error) {
      dispatch(fetchTasksAction(error, "error"));
    }
  };
}

export function fetchTasksAction(data, dataType) {
  return {
    type: FETCH_TASKS,
    data: data,
    dataType: dataType,
  }
}