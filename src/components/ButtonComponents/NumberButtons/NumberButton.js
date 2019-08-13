import React from "react";

const NumberButton = props => {
  return (
    <div>
      <button> {props.numberValue.char} </button>
    </div>
  );
};

export default NumberButton;
