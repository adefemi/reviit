import React from "react";

import "./Stepper.css";

export default function Stepper(props) {
  let stepsArray = React.Children.toArray(props.children),
    activeStatus;

  const steps = () => {
    return stepsArray.map((step, index) => {
      activeStatus = step.props.active ? " active " : "";
      return index < stepsArray.length - 1 ? (
        <React.Fragment key={index}>
          {step}
          <div className={"step-line" + activeStatus} />
        </React.Fragment>
      ) : (
        <React.Fragment key={index}>{step}</React.Fragment>
      );
    });
  };
  return (
    <div className={"Stepper " + props.className}>
      <div
        className={
          "dflex justify-around " +
          (props.vertical ? "columns vertical-orientation" : "")
        }
      >
        {steps()}
      </div>
    </div>
  );
}
