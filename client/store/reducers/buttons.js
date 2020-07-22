import * as actionTypes from "../actions/actionTypes";

// Global state
let initialState = {
  chosenOrg: null,
};

// Reducer
const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUTTON_CHOSEN: {
      return {
        ...state,
        chosenOrg: action.payload,
      };
    }
    default:
      return state;
  }
};

export default buttonReducer;

// let reducer = (state = initialState, action) => {
//     if (action.type === "BUTTON_CHOSEN") {
//       return {
//         ...state,
//         chosenCharity: action.payload,
//       };
//     }
//     return state;
//   };
