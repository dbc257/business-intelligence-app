import * as actionTypes from "../actions/actionTypes";

export const buttonChosen = (chosenOrganization) => {
  return {
    type: actionTypes.BUTTON_CHOSEN,
    payload: chosenOrganization,
  };
};

export const authenticated = (isLoggedIn) => {
  return {
    type: actionTypes.AUTHENTICATED,
    value: isLoggedIn,
  };
};
