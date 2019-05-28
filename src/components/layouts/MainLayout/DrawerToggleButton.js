import React from "react";
import "./DrawerToggleButton.css";
import { Icon } from "../../common";

const DrawToggleButton = props => (
  <div onClick={props.onClick} className="containerr">
    <Icon type={"feather"} name={"menu"} size={30} />
  </div>
);

export default DrawToggleButton;
