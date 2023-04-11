import React from "react";
import Part from "./Part";

function Content({ ...props }) {
  return (
    <div>
      <Part parts={props.part1} exercises={props.exercises1} />
      <Part parts={props.part2} exercises={props.exercises2} />
      <Part parts={props.part3} exercises={props.exercises3} />
    </div>
  );
}

export default Content;
