import themeReducer from "./theme";
import counterReducer from "./counter";
import userReducer from "./user";

const rootReducer = ({ theme, counter }, action) => ({
  theme: themeReducer(theme, action),
  counter: counterReducer(counter, action),
  user: userReducer(counter, action)
});

export default rootReducer;
