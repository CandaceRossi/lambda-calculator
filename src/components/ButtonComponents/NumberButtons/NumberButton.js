import React from "react";

const NumberButton = props => {
  return (
    <div>
      <button> {props.numberValue} </button>
    </div>
  );
};

export default NumberButton;
