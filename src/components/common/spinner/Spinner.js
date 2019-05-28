import React from "react";
import PropTypes from "prop-types";

import "./Spinner.css";

const defaultProps = {
  type: "default"
};

const propTypes = {
  type: PropTypes.oneOf(["default", "alternate"])
};

const Spinner = props => {
  return <div className={`lds-dual-ring ${props.type}`} />;
};

Spinner.defaultProps = defaultProps;
Spinner.propTypes = propTypes;

export default Spinner;
