import { FETCH_CURRENT_USER } from "../actions/actionTypes";


const initialState = {
  currentUser: {
    data: null,
    error: null,
  },
};

export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          [action.dataType]: action.data,
        },
      };
    default:
      return state;
  }
}
