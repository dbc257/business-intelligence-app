// Global state
let initialState = {
  buttonChoice: null,
};

// Reducer
let reducer = (state = initialState, action) => {
  if (action.type === "BUTTON_CHOSEN") {
    return {
      ...state,
      buttonChoice: action.payload,
    };
  }
  return state;
};

export default reducer;
