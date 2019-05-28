import React from "react";
import { connect } from "react-redux";

import bg from "../../../assets/bg.jpg";
import "./authLayout.css";

const AuthLayout = props => (
  <div
    id="auth-container"
    className={props.className}
    style={{ backgroundImage: "url('" + bg + "')" }}
  >
    <div
      className="auth-container-cover"
      style={{ padding: "0 60px", justifyContent: "left" }}
    >
      {/*<div className={"page-title"}>
        <Typography style={{ color: "#000" }} variant={"h2"}>
          My Tasks
        </Typography>
      </div>*/}
    </div>
    <div className="auth-container-cover">{props.children}</div>
  </div>
);

export default connect(null)(AuthLayout);
