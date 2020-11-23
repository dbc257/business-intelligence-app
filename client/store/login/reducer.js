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