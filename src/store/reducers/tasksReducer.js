import { FETCH_TASKS, FETCH_TASKS_DETAIL } from "../actions/actionTypes";

const initialState = {
  tasks: {
    data: null,
    error: null,
  },
  taskDetail: {
    data: null,
    error: null
  }
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        tasks: {
          [action.dataType]: action.data,
        },
      };
    case FETCH_TASKS_DETAIL:
      return {
        ...state,
        taskDetail: {
          [action.dataType]: action.data,
        },
      };
    default:
      return state;
  }
}
