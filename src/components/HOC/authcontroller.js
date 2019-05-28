import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";

import { USERTOKEN, USERDATA } from "../utils/data";
import {
  actionSetUser,
  actionSetUserProfile
} from "../../redux/actions/UserAction";

const VERIFY_TOKEN = gql`
  query VERIFY_TOKEN($token: String!) {
    verifyToken(token: $token) {
      payload
      user {
        id
        email
        userProfile {
          firstName
          lastName
        }
      }
    }
  }
`;

const GET_USER_PROFILE = gql`
  query USER_PROFILE($userId: ID!) {
    userProfile(userId: $userId) {
      id
      uuid
      firstName
      lastName
      phoneNumber
      address
      city
      state
      country
      longitude
      latitude
      profilePicture
      preference
      status
      createdAt
      updatedAt
    }
  }
`;

export const getUserProfile = (userId, client, props) => {
  client
    .query({
      query: GET_USER_PROFILE,
      variables: { userId }
    })
    .then(res => {
      props.actionSetUserProfile(res.data.userProfile);
    });
};

const AuthController = component => {
  const Authenticate = props => {
    const [fetching, setFetching] = useState(true);

    const RenderComponent = props.component;
    const client = props.client;
    const token = localStorage.getItem(USERTOKEN);

    if (!token) {
      props.history.push(
        `/authentication?redirect=${encodeURIComponent(
          props.location.pathname
        )}`
      );
      localStorage.removeItem(USERTOKEN);
      localStorage.removeItem(USERDATA);
      return null;
    }

    useEffect(() => {
      client
        .query({
          query: VERIFY_TOKEN,
          variables: { token }
        })
        .then(
          result => {
            //dispatch the user in redux
            props.actionSetUser(result.data.verifyToken.user);
            getUserProfile(result.data.verifyToken.user.id, client, props);

            setFetching(false);
          },
          error => {
            props.history.push(
              `/authentication?redirect=${props.location.pathname}`
            );
            localStorage.removeItem(USERTOKEN);
            localStorage.removeItem(USERDATA);
            return null;
          }
        );
    }, [RenderComponent]);

    if (fetching) {
      return <h3>loading</h3>;
    }

    return <RenderComponent {...props} />;
  };

  Authenticate.defaultProps = {
    component
  };

  //create dispatch object
  const dispatch = {
    actionSetUser: payload => dispatch => dispatch(actionSetUser(payload)),
    actionSetUserProfile: payload => dispatch =>
      dispatch(actionSetUserProfile(payload))
  };

  return withApollo(
    connect(
      null,
      dispatch
    )(Authenticate)
  );
};

export default AuthController;
