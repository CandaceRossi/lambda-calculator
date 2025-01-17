import React, { useState } from "react";
import NumberButton from "./NumberButton";

//import any components needed

//Import your array data to from the provided data file
import { numbers } from "../../../data.js";
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [calcNumbers, setCalcNumbers] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {calcNumbers.map(number => {
        return (
          <NumberButton
            className="numberButton"
            numberKey={number}
            numberValue={number}
          />
        );
      })}
    </div>
  );
};

export default Numbers;
