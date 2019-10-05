export const AIR_HUMIDITY = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_AIR_HUMIDITY":
      return action.payload;
    default:
      return state;
  }
};
