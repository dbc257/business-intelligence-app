export const loginActionTypes = {
  AUTHENTICATED: "AUTHENTICATED",
};

//   export const onLoggedIn = () => (dispatch) => {
//     return dispatch({ type: loginActionTypes.AUTHENTICATED})
//   }
export const authenticated = (isLoggedIn) => (dispatch) => {
  return dispatch({
    type: loginActionTypes.AUTHENTICATED,
    value: isLoggedIn,
  });
};
