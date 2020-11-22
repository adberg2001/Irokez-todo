import fetchRequest from "../../fetch/configuratedFetch"
import {
  FETCH_TASKS,
  FETCH_TASKS_DETAIL,
} from "./actionTypes";

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
export function fetchTasksDetail(id) {
  return async(dispatch) => {
    try {
      const response = await fetchRequest("GET", `todo/${id}`);
      dispatch(fetchTasksDetailAction(response, "data"));
    } catch (error) {
      dispatch(fetchTasksDetailAction(error, "error"));
    }
  };
}

export function fetchTasksDetailAction(data, dataType) {
  return {
    type: FETCH_TASKS_DETAIL,
    data: data,
    dataType: dataType,
  }
}