import React from "react";

export default (props) => {
    return (
        Math.ceil(Math.random() * (props.max - props.min) + props.min)
    )
}