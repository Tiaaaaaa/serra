export const GROUND_HUMIDITY = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_GROUND_HUMIDITY":
      return action.payload;
    default:
      return state;
  }
};
