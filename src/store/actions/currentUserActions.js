import fetchRequest from "../../fetch/configuratedFetch"
import {
  FETCH_CURRENT_USER,
} from "./actionTypes";

export function fetchCurrentUser(data) {
  return async(dispatch) => {
    try {
      const response = await fetchRequest("POST", 'user/login/', data);
      response && response.token &&
      localStorage.setItem('token', response.token)
      dispatch(fetchCurrentUserAction(response, "data"));
    } catch (error) {
      dispatch(fetchCurrentUserAction(error, "error"));
    }
  };
}

export function fetchCurrentUserAction(data, dataType) {
  return {
    type: FETCH_CURRENT_USER,
    data: data,
    dataType: dataType,
  }
}