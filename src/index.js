import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state";
import ThemedButton from "./Theme";

import "./styles.css";

const App = () => {
  const initialState = {
    theme: { primary: "hotpink" }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "changeTheme":
        return {
          ...state,
          theme: action.newTheme
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ThemedButton />
      </div>
    </StateProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
