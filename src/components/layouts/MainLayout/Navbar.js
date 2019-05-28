import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { element } from "prop-types";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";

import "./Navbar.css";
import DrawerToggleButton from "./DrawerToggleButton";
import { Typography, DropDown } from "../../common";
import { SITETITTLE } from "../../utils/data";
import CurrencyIcon from "../../currency";
import { setActiveCurrency } from "../../../redux/actions/currency";
import { LocalizerSwitch } from "../../localizer";
import UserSettings from "./userSettings";
import _isEmpty from "lodash/isEmpty";

class Navbar extends Component {
  state = {};

  static propTypes = {
    children: element
  };

  static defaultProps = {
    children: React.createElement("div")
  };

  handleDropDown = () => {
    document.querySelector(".mobile-dropdown").classList.add("navbar-fx-show");
    document.querySelector("#faded-cover").style.display = "block";
  };

  render() {
    let childProps = this.props.children;
    return (
      <Fragment>
        <div className={"test"}>
          <div className="Brand-logo">
            <NavLink
              to="/"
              className="brand"
              style={{ textDecoration: "none", color: "black" }}
            >
              {SITETITTLE}
            </NavLink>
          </div>

          <div className="nav-log desktop">
            <NavSettings {...this.props} />
            <NavLinks
              currentView={this.state.currentView}
              handleClick={this.handleClick}
              children={childProps}
              {...this.props}
            />
          </div>

          <div className="nav-log mobile">
            <NavSettings {...this.props} />
            <DrawerToggleButton onClick={this.handleDropDown} />
          </div>
        </div>

        <div className="mobile-dropdown">
          <Typography wrapperClass="text-center brand-divider" variant="h3">
            ARTISAN
          </Typography>

          <NavLinks
            currentView={this.state.currentView}
            handleClick={this.handleClick}
            children={childProps}
            {...this.props}
          />
        </div>
      </Fragment>
    );
  }
}

const getCurrencyArray = array => {
  if (!array) {
    return;
  }
  let arrayReturn = [];
  array.map((array, index) => {
    arrayReturn.push({
      value: array.shortCode,
      content: (
        <span>
          <img
            width={20}
            height={11}
            src={array.svg}
            alt={array.shortCode}
            style={{ marginRight: "3px" }}
          />
          <CurrencyIcon
            name={array.name}
            color="black"
            style={{ top: "1px", position: "relative" }}
            size="12px"
          />
          <span style={{ marginLeft: "3px" }}>{array.shortCode}</span>
        </span>
      )
    });
    return null;
  });
  return arrayReturn;
};

const NavSettings = props => (
  <div className="nav-settings">
    {props.currencies && props.currencies.length > 0 && (
      <li className="nav-link2">
        <DropDown
          active={props.activeCurrency.shortCode}
          options={getCurrencyArray(props.currencies)}
          onChange={option =>
            props.setActiveCurrency(
              props.currencies.filter(
                item => item.shortCode === option.value
              )[0]
            )
          }
          dropDownWidth="120px"
        />
      </li>
    )}
    {props.languages && props.languages.length > 0 && (
      <li className="nav-link2">
        <LocalizerSwitch />
      </li>
    )}
  </div>
);

const NavLinks = props => (
  <React.Fragment>
    {props.user.data && !_isEmpty(props.user.data) ? (
      <Fragment>
        <NavLink
          to="/how-it-works"
          activeClassName={"active"}
          className={`nav-link ${props.dropdown}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Translate id={"how_it_works"}>How it works</Translate>
        </NavLink>
        <NavLink
          to="/my-tasks"
          activeClassName={"active"}
          className={`nav-link ${props.dropdown}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Translate id={"my_tasks"}>My Tasks</Translate>
        </NavLink>

        <NavLink
          to="/my-jobs"
          activeClassName={"active"}
          className={`nav-link ${props.dropdown}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Translate id={"my_jobs"}>My Jobs</Translate>
        </NavLink>
      </Fragment>
    ) : (
      <Fragment>
        <NavLink
          to="/authentication"
          activeClassName={"active"}
          className={`nav-link ${props.dropdown}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Translate id={"login"}>Login</Translate>
        </NavLink>
      </Fragment>
    )}

    {props.children.length > 0 &&
      props.children.map(child => (
        <NavLink
          className={`nav-link ${props.dropdown}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          {child.props.children}
        </NavLink>
      ))}

    {props.user.data && !_isEmpty(props.user.data) && (
      <UserSettings userData={props.user.data} />
    )}
  </React.Fragment>
);

const mapStateToProps = (state, ownProps) => ({
  currencies: state.currencies,
  activeCurrency: state.activeCurrency,
  visibility: state.toggle.opaqueNavbar,
  user: state.user
});

export default withLocalize(
  withRouter(
    connect(
      mapStateToProps,
      { setActiveCurrency }
    )(Navbar)
  )
);
