const theme = (state, action) => {
  switch (action.type) {
    case "changeTheme":
      return {
        ...state,
        primary: action.newTheme
      };
    default:
      return state;
  }
};

export default theme;
