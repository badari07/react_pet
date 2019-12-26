export default (state = [], action) => {
  if (action.type === "SET_ANIMALS") {
    return action.payload;
  } else {
    return state;
  }
};
