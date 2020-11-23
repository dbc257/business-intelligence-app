export const loginActionTypes = {
  AUTHENTICATED: "AUTHENTICATED",
};

export const authenticated = (isLoggedIn) => (dispatch) => {
  return dispatch({
    type: loginActionTypes.AUTHENTICATED,
    value: isLoggedIn,
  });
};
