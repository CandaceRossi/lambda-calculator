import React from "react";

const SpecialButton = props => {
  return (
    <div>
      <button>{props.specialValue.char}</button>
    </div>
  );
};

export default SpecialButton;
