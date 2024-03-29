import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state";
import ThemedButton from "./components/Theme";
import Counter from "./components/Counter";
import User from "./components/User";
import reducer from "./reducers";
import "./styles.css";

const initialState = {
  theme: { primary: "hotpink" },
  counter: { count: 0 },
  user: { loading: false }
};

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="app-wrapper">
        <div className="app">
          <h1>Making dev's life easier</h1>
          <h3>State management in ⚛React⚛ ️with just hooks and context</h3>
          <ThemedButton />
          <Counter />
          <User />
          <h1>
            Bye bye{" "}
            <span role="img" aria-label="bye">
              👋
            </span>{" "}
            Redux
          </h1>
        </div>
      </div>
    </StateProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
