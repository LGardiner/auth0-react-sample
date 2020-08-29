import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOAD_USER_RATINGS_SUCCESS:
      //ovbiously return user when we get data back
      return initialState;
    default:
      return initialState;
  }
}
