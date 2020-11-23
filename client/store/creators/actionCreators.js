import * as actionTypes from "../actions/actionTypes";

export const authenticated = (isLoggedIn) => {
  return {
    type: actionTypes.AUTHENTICATED,
    value: isLoggedIn,
  };
};
