export const buttonActionTypes = {
  BUTTON_CHOSEN: "BUTTON_CHOSEN",
};

//   export const serverRenderClock = (isServer) => (dispatch) => {
//     return dispatch({
//       type: tickActionTypes.TICK,
//       light: !isServer,
//       ts: Date.now(),
//     })
//   }

//   export const startClock = () => (dispatch) => {
//     return setInterval(
//       () => dispatch({ type: tickActionTypes.TICK, light: true, ts: Date.now() }),
//       1000
//     )
//   }

export const buttonChosen = (chosenCompany) => (dispatch) => {
  return dispatch({
    type: actionTypes.BUTTON_CHOSEN,
    payload: chosenCompany,
  });
};

//   export const BUTTON_CHOSEN = "BUTTON_CHOSEN";
