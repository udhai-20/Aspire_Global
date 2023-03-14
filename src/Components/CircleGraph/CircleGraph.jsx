import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CircularProgressbar.css";
function CircleGraph({ percentage }) {
  return (
    <>
      <div>
        <CircularProgressbar
          strokeWidth={3}
          fontSize={"5px"}
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
