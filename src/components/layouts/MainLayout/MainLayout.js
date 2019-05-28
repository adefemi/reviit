import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./MainLayout.css";
import AuthLayout from "../AuthLayout/AuthLayout";
import propTypes from "prop-types";

function MainLayout(props) {
  const hideNavbar = () => {
    document
      .querySelector(".mobile-dropdown")
      .classList.remove("navbar-fx-show");

    document.querySelector("#faded-cover").style.display = "none";
  };

  return (
    <AuthLayout>
      <div className={`mainpage ${props.className}`}>
        <Header />
        <div
          id="faded-cover"
          onClick={hideNavbar}
          style={{ display: "none" }}
        />
        <div className="body main-layout-body">{props.children}</div>
        <Footer className={props.hideFooter ? "hide" : ""} />
      </div>
    </AuthLayout>
  );
}

MainLayout.propTypes = {
  hideFooter: propTypes.bool
};

MainLayout.defaultProps = {
  hideFooter: false
};

export default MainLayout;
