import axios from "../../axios/configuratedAxios";
import {
  FETCH_COURSES_START,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_ERROR,
  FETCH_COURSES_DETAIL,
  FETCH_COURSES_DETAIL_ERROR
} from "./actionTypes";

export function fetchCourses() {
  return async(dispatch) => {
    dispatch(fetchCoursesStart());

    try {
      const response = await axios.get('courses/');
      dispatch(fetchCoursesSuccess(response.data));
      console.log(response.data)
    } catch (error) {
      dispatch(fetchCoursesError(error));
    }
  };
}

export function fetchCoursesStart() {
  return {
    type: FETCH_COURSES_START,
  };
}

export function fetchCoursesSuccess(courses) {
  return {
    type: FETCH_COURSES_SUCCESS,
    courses: courses
  }
}

export function fetchCoursesError(error) {
  return {
    type: FETCH_COURSES_ERROR,
    error: error
  }
}