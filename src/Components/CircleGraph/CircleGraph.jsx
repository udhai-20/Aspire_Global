import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function CircleGraph({ percentage }) {
  return (
    <>
      <div>
        <CircularProgressbar
          strokeWidth={3}
          value={percentage}
          text={`${percentage / 10}%`}
          styles={buildStyles({
            textColor: "green",
            pathColor: "#799447",
          })}
        />
      </div>
    </>
  );
}

export default CircleGraph;
