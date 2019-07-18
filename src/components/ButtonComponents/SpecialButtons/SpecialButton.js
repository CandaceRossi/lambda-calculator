import React from "react";

const SpecialButton = (props) => {
    const [special] = props;
    console.log("this is sommore props", props)
    return ( 
        <div>
        { /* Display a button element rendering the data being passed down from the parent container on props */ } <
        <button>{props.val}< /button>
    );
};
export default SpecialButton;