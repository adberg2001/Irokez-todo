import { IS_LOADING } from "../actions/actionTypes";

const initialState = {
  loading: false
};

export default function isLoadingReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}
