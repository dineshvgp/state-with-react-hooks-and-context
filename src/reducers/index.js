import themeReducer from "./theme";
import counterReducer from "./counter";

const rootReducer = ({ theme, counter }, action) => ({
  theme: themeReducer(theme, action),
  counter: counterReducer(counter, action)
});

export default rootReducer;
