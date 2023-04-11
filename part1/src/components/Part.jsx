import React from "react";

function Part({ ...props }) {
  return <div>{`${props.parts} ${props.exercises}`}</div>;
}

export default Part;
