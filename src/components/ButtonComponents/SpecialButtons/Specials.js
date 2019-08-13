import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file
import { specials } from "../../../data.js";
const Specials = () => {
  // STEP 2 - add the imported data to state
  const [calcSpecials, setCalcSpecials] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {calcSpecials.map(specials => {
        return <SpecialButton specialKey={specials} specialValue={specials} />;
      })}
    </div>
  );
};

export default Specials;
