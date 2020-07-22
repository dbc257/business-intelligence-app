import { loginActionTypes } from "./action";

const loginInitialState = {
  isLoggedIn: false,
};

export default function reducer(state = loginInitialState, action) {
  switch (action.type) {
    case loginActionTypes.AUTHENTICATED:
      return Object.assign({}, state, {
        isLoggedIn: action.value,
      });
    default:
      return state;
  }
}

// import * as actionTypes from "../actions/actionTypes";

// const initialState = {
//   isLoggedIn: false,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.AUTHENTICATED: {
//       return {
//         ...state,
//         isLoggedIn: action.value,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default reducer;
