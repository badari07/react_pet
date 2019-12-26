export default (state = "Seattle, WA", action) => {
  if (action.type === "SET_LOACTION") {
    return action.payload;
  } else {
    return state;
  }
};
