import React from "react";

const SpecialButton = () => {
    const [special] = props;
    console.log("this is sommore props", props)
    return ( <
        >
        { /* Display a button element rendering the data being passed down from the parent container on props */ } <
        button onClick = {
            () => { specials(props) }
        } > { specials } < /button>
    );
};