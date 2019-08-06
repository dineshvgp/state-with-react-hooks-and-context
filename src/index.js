import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state";
import ThemedButton from "./Theme";
import Counter from "./Counter";
import "./styles.css";

const initialState = {
  theme: { primary: "hotpink" },
  counter: { count: 0 }
};

const themeReducer = (state, action) => {
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

const counterReducer = (state, action) => {
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

const mainReducer = ({ theme, counter }, action) => ({
  theme: themeReducer(theme, action),
  counter: counterReducer(counter, action)
});

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ThemedButton />
        <Counter />
      </div>
    </StateProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
