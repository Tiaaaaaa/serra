export const LUMINANCE = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return !state;
    default:
      return state;
  }
};
