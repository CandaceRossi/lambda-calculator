import React { useState } from "react";
import OperatorButton from './OperatorButton';
import { operators } from '../../../data.js'


//import any components needed

//Import your array data to from the provided data file

const Operators = (operatorState, setOperatorState) => {
        // STEP 2 - add the imported data to state
        const [operatorState, setOperatorState] = useState(operators);
        console.log('operatorsState', operatorsState);
        return ( 
          <div > 
            {/* STEP 3 - Use .map() to iterate over your array data and return a button
                       component matching the name on the provided file. Pass
            it any props needed by the child component*/}
                {operatorsState.map((operator, index) => ()
                        {}
                    ))
                } <
                /div>
            );
        };
        export default Operators;