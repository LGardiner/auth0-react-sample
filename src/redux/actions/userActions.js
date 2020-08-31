import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadUserRatingsSuccess(userRatings) {
  return { type: types.LOAD_USER_RATINGS_SUCCESS, userRatings };
}

export function loadUserRatings() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userApi
      .getUser()
      .then((userRatings) => {
        dispatch(loadUserRatingsSuccess(userRatings));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
