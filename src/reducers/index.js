import themeReducer from "./theme";
import counterReducer from "./counter";
import userReducer from "./user";

const rootReducer = ({ theme, counter, user }, action) => ({
  theme: themeReducer(theme, action),
  counter: counterReducer(counter, action),
  user: userReducer(user, action)
});

export default rootReducer;
