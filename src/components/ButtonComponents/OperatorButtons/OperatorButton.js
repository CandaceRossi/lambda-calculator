import React from "react";

const OperatorButton = props => {
  return (
    <div>
      <button>{props.operatorValue.char}</button>
    </div>
  );
};

export default OperatorButton;
