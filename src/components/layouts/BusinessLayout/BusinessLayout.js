import React, { Fragment } from "react";

import { Card, Typography } from "../../../components";
import ProcessStepper from "../../../pages/professional/setup/components/ProcessStepper";
import "./BusinessLayout.css";
import MainLayout from "../MainLayout/MainLayout";

export default function BusinessLayout(props) {
  return (
    <Fragment>
      <MainLayout hideFooter={true} className="reset-auth-container">
        <div className="container business-layout max-width-1400">
          <Typography
            variant="normal"
            wrapperClass="black-text bolder-text card-header"
          >
            {props.boxHeader}
          </Typography>
          <div className="dflex">
            <Card className="steps-card">
              <ProcessStepper screen={props.screen} steps={props.steps} />
              <Typography
                variant="h3"
                style={{ color: "#000000", marginTop: "15px" }}
                className="text-center"
                wrapperClass="text-center"
              >
                {props.pageTitle}
              </Typography>
              <div
                className="undraw-img text-center"
                style={{ marginTop: "15px" }}
              >
                <img src={props.undrawSvg} alt="Step One" />
              </div>
              <Typography
                variant="p"
                wrapperClass="text-center"
                style={{
                  fontSize: "16px",
                  color: "#000000",
                  fontWeight: "bolder",
                  marginTop: "62px"
                }}
              >
                {props.pageSubtitle}
              </Typography>
            </Card>
            <Card className="info-card flex-grow-1">
              <div className="hide-on-lg dblock p-1">
                <ProcessStepper screen={props.screen} steps={props.steps} />
              </div>
              {props.children}
            </Card>
          </div>
          {props.paginator}
        </div>
      </MainLayout>
    </Fragment>
  );
}
