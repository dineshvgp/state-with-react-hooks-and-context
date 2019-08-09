import {
  REQUEST_USER_DETAILS,
  SUCCESS_USER_DETAILS,
  ERROR_USER_DETAILS
} from "../actions/User";

const user = (state, action) => {
  switch (action.type) {
    case REQUEST_USER_DETAILS:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_USER_DETAILS:
      return {
        ...state,
        details: action.payload[0],
        loading: false
      };
    case ERROR_USER_DETAILS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default user;
