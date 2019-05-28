import React from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "react-google-login";

import { Icon, Button } from "../common";

import "./GoogleLogin.css";

const propTypes = {
  clientId: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onSuccess: PropTypes.func.isRequired
};

const AppGoogleLogin = props => {
  return (
    <GoogleLogin
      clientId={props.clientId}
      buttonText="Login"
      onSuccess={props.onSuccess}
      onFailure={props.onFailure}
      cookiePolicy={"single_host_origin"}
      render={renderProps => (
        <Button
          className={"GoogleLogin"}
          icon={<Icon style={{ color: "#DB4437" }} name={"google"} />}
          onClick={renderProps.onClick}
          block
        >
          <b>{props.buttonText || ""}</b>
        </Button>
      )}
    />
  );
};

AppGoogleLogin.propTypes = propTypes;

export default AppGoogleLogin;
