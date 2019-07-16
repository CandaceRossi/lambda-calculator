import React from "react";

const OperatorButton = () => {
    const [operators] = props;
    console.log("this is more props", props)

    return ( <
        >
        { /* Display a button element rendering the data being passed down from the parent container on props */ } <
        button onClick = {
            () => { operator(props) }
        } { operators }
        />
    );
};