const counter = (state, action) => {
  switch (action.type) {
    case "changeTheme":
      return {
        ...state,
        count: state.count + 1
      };
    case "reset":
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

export default counter;
