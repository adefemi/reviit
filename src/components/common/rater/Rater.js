import React from "react";
import propTypes from "prop-types";
import { Icon } from "../../common";
import "./Rater.css";
export default function Rater({ rate, total }) {
  const generateRating = () => {
    let rating = [];
    for (let i = 1; i <= total; i++) {
      rating.push(
        <Icon
          key={i}
          type="md"
          name={rate >= i ? "ic_star" : "ic_star_border"}
          className={rate >= i ? "star-filled" : "star-unfilled"}
          size={24}
        />
      );
    }

    return rating;
  };
  return <div className="Rater">{generateRating()}</div>;
}

Rater.propTypes = {
  rate: propTypes.number.isRequired,
  total: propTypes.number
};

Rater.defaultProps = {
  total: 5
};
