export const WATER = (state = 0, action) => {
  switch (action.type) {
    case "ADD_WATER":
      return state + action.payload;
    default:
      return state;
  }
};
