import { FETCH_CURRENT_USER } from "../actions/actionTypes";


const initialState = {
  currentUser: {
    data: null,
    error: null,
  },
};

export default function currentUser(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          [action.key]: action.data,
        },
      };
    default:
      return state;
  }
}
