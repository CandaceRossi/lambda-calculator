import React from "react";

const NumberButton = (props) => {
    const [number] = props;
    console.log("this is props", props)
    return ({ /* Display a button element rendering the data being passed down from the parent container on props */ } <
        <
        button onClick = {
            () => { numbers(props) }
        } > { numbers }
        />
    );
};

export default NumberButton;