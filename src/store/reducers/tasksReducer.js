import { FETCH_TASKS } from "../actions/actionTypes";

const initialState = {
  tasks: {
    data: null,
    error: null,
  },
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
    default:
      return state;
  }
}
