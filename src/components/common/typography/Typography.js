import React from "react";
import PropTypes from "prop-types";

import "./Typography.css";

const Typography = props => {
  let fontSize = props.fontSize && { fontSize: props.fontSize };
  if (props.variant === "h1") {
    return (
      <h1 id="hOne" className={props.wrapperClass}>
        <span
          style={{ ...props.style, ...fontSize }}
          className={props.className}
        >
          {props.children}
        </span>
      </h1>
    );
  } else if (props.variant === "h2") {
    return (
      <h2 id="hTwo" className={props.wrapperClass}>
        <span
          style={{ ...props.style, ...fontSize }}
          className={props.className}
        >
          {props.children}
        </span>
      </h2>
    );
  } else if (props.variant === "h3") {
    return (
      <h3 id="hThree" className={props.wrapperClass}>
        <span
          style={{ ...props.style, ...fontSize }}
          className={props.className}
        >
          {props.children}
        </span>
      </h3>
    );
  } else if (props.variant === "h4") {
    return (
      <h4 id="hFour" className={props.wrapperClass}>
        <span
          style={{ ...props.style, ...fontSize }}
          className={props.className}
        >
          {props.children}
        </span>
      </h4>
    );
  } else if (props.variant === "h5") {
    return (
      <h5 id="hFive" className={props.wrapperClass}>
        <span
          style={{ ...props.style, ...fontSize }}
          className={props.className}
        >
          {props.children}
        </span>
      </h5>
    );
  } else if (props.variant === "h6") {
    return (
      <h6 id="hSix" className={props.wrapperClass}>
        <span
          style={{ ...props.style, ...fontSize }}
          className={props.className}
        >
          {props.children}
        </span>
      </h6>
    );
  } else if (props.variant === "normal") {
    return (
      <div id="normal-typography" className={props.wrapperClass}>
        <span
          style={{ ...props.style, ...fontSize }}
          className={props.className}
        >
          {props.children}
        </span>
      </div>
    );
  }
  return (
    <p id="pTag" className={props.wrapperClass}>
      <span style={{ ...props.style, ...fontSize }} className={props.className}>
        {props.children}
      </span>
    </p>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "normal"]),
  style: PropTypes.object
};

Typography.defaultProps = {
  variant: "p"
};

export default Typography;
