import React from "react";

const OperatorButton = (props) => {
    console.log("this is more props", props)
const [opValue, setTopValue]= useState(operators)
    return (
        <div>
            { /* Display a button element rendering the data being passed down from the parent container on props */ } <
        {opValue.map (op => {
            <OperatorButton key={}
        })}
        <button>{props.ops} onClick = {
            () => { operator(props) }
        } { operators } <
        button / >
    );
};
export default OperatorButtons