import React, { Fragment } from "react";

import AuthLayout from "../AuthLayout/AuthLayout";
import { Card, Typography } from "../../../components";
import "./CardGridLayout.css";

export default function CardGridLayout(props) {
  return (
    <Fragment>
      <div className="CardGridLayout">
        <AuthLayout className="reset-auth-container">
          <div className="container card-grid-layout">
            <Typography
              variant="h2"
              wrapperClass="black-text bolder-text card-header clear-spaces"
            >
              {props.boxHeader}
            </Typography>
            <div className="dflex max-width-1400">
              <Card className="left-nav dflex columns justify-center">
                {props.leftNav}
              </Card>
              <Card className="right-nav flex-grow-1">{props.children}</Card>
            </div>
          </div>
        </AuthLayout>
      </div>
    </Fragment>
  );
}
