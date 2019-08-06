import React from "react";
import { useStateValue } from "./state";

const ThemedButton = () => {
  const [{ theme }, dispatch] = useStateValue();
  const buttonText =
    theme.primary === "steelblue" ? "Make me pink!" : "Make me blue!";
  return (
    <button
      style={{ backgroundColor: theme.primary }}
      onClick={() =>
        dispatch({
          type: "changeTheme",
          newTheme: {
            primary: theme.primary === "steelblue" ? "hotpink" : "steelblue"
          }
        })
      }
    >
      {buttonText}
    </button>
  );
};

export default ThemedButton;
