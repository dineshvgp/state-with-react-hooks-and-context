import React, { Fragment } from "react";
import { useStateValue } from "./state";

const Counter = () => {
  const [{ counter }, dispatch] = useStateValue();
  return (
    <Fragment>
      <div> You have clicked {counter.count} times </div>
      <button
        style={{ backgroundColor: "teal" }}
        onClick={() =>
          dispatch({
            type: "reset"
          })
        }
      >
        Reset counter
      </button>
    </Fragment>
  );
};

export default Counter;
