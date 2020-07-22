import { buttonActionTypes } from "./action";

const companyInitialState = {
  chosenCompany: null,
};

export default function reducer(state = companyInitialState, action) {
  switch (action.type) {
    case buttonActionTypes.BUTTON_CHOSEN:
      return Object.assign({}, state, {
        chosenCompany: action.payload,
      });
    default:
      return state;
  }
}

//   let reducer = (state = initialState, action) => {
//     if (action.type === "BUTTON_CHOSEN") {
//       return {
//         ...state,
//         buttonChoice: action.payload,
//       };
//     }
//     return state;
//   };

//   export default reducer;

//   import * as actionTypes from "../actions/actionTypes";

// // Global state
// let initialState = {
//   chosenOrg: null,
// };

// // Reducer
// const buttonReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.BUTTON_CHOSEN: {
//       return {
//         ...state,
//         chosenOrg: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default buttonReducer;
