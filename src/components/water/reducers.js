export const WATER = (state = 0, action) => {
  switch (action.type) {
    case "ADD_WATER":
      return 100;
    case "REMOVE_WATER":
      return action.payload;
    default:
      return state;
  }
};
