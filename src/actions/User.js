import * as UserApi from "../apis/User";

const REQUEST_USER_DETAILS = "REQUEST_USER_DETAILS";
const SUCCESS_USER_DETAILS = "SUCCESS_USER_DETAILS";
const ERROR_USER_DETAILS = "ERROR_USER_DETAILS";

const fetchUserDetails = async dispatch => {
  dispatch({ type: REQUEST_USER_DETAILS });
  try {
    const response = await UserApi.get();
    const payload = await response.json();
    dispatch({ type: SUCCESS_USER_DETAILS, payload });
  } catch (error) {
    dispatch({ type: ERROR_USER_DETAILS, error });
  }
};

export {
  fetchUserDetails,
  REQUEST_USER_DETAILS,
  SUCCESS_USER_DETAILS,
  ERROR_USER_DETAILS
};
