import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withApollo } from "react-apollo";

import "./userSettings.css";
import { DropDown } from "../../common";
import { USERTOKEN, USERDATA } from "../../utils/data";
import {
  actionSetUser,
  actionSetUserProfile
} from "../../../redux/actions/UserAction";
import { getUserProfile } from "../../HOC/authcontroller";

const logout = props => {
  localStorage.removeItem(USERTOKEN);
  localStorage.removeItem(USERDATA);
  props.actionSetUser(null);
  props.actionSetUserProfile(null);
  props.history.push("/");
};

let linkArray = props => {
  return [
    { content: "Profile" },
    { content: <span onClick={() => logout(props)}>Logout</span> }
  ];
};

const UserSettings = props => {
  if (!props.userProfile) {
    getUserProfile(props.userData.id, props.client, props);
    return (
      <span className="nav-link" onClick={() => logout(props)}>
        Logout
      </span>
    );
  }
  return (
    <div className="user-setting-main">
      <DropDown
        active={
          <div className="imageCon">
            <img src={props.userProfile.profilePicture} alt="" />
          </div>
        }
        staticContent={true}
        options={linkArray(props)}
        onChange={() => null}
        dropDownWidth="120px"
      />
    </div>
  );
};

const mapStateToProps = state => ({
  userProfile: state.userProfile
});

const dispatch = {
  actionSetUser: payload => dispatch => dispatch(actionSetUser(payload)),
  actionSetUserProfile: payload => dispatch =>
    dispatch(actionSetUserProfile(payload))
};

export default withApollo(
  withRouter(
    connect(
      mapStateToProps,
      dispatch
    )(UserSettings)
  )
);
