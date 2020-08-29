import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadUserRatingsSuccess(userRatings) {
  return { type: types.LOAD_USER_RATINGS_SUCCESS, userRatings };
}

export function loadUserRatings() {
  return function (dispatch) {
    console.log("ayo load user ratings dispatch");
    dispatch(beginApiCall());
    return userApi
        .getUser()
        // eslint-ignore-next-line
        .then((userRatings) => {
          dispatch(loadUserRatingsSuccess(userRatings));
        })
        // eslint-ignore-next-line
        .catch((error) => {
          dispatch(apiCallError(error));
          throw error;
        });
    
  };
}
