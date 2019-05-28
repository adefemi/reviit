import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import PropTypes from "prop-types";

import { Icon, Button } from "../common";

const propTypes = {
  appId: PropTypes.string,
  redirect: PropTypes.string,
  buttonText: PropTypes.string,
  callback: PropTypes.func.isRequired
};

const AppFacebookLogin = props => {
  return (
    <FacebookLogin
      appId="298997581049031"
      version={"v3.2"}
      autoLoad
      redirectUri={props.redirect}
      callback={props.callback}
      render={renderProps => (
        <Button
          style={{
            backgroundColor: "#3C5A99",
            padding: "10px"
          }}
          icon={<Icon name={"facebook"} />}
          onClick={renderProps.onClick}
          block
        >
          <b>{props.buttonText || ""}</b>
        </Button>
      )}
    />
  );
};

AppFacebookLogin.propTypes = propTypes;

export default AppFacebookLogin;
