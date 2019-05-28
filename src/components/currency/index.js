import React from "react";
import store from "../../redux/store";
import _isEmpty from "lodash/isEmpty";
import { Decimal } from "decimal.js";

import Naira from "./naira";
import Dollar from "./dollar";
import Pound from "./pound";
import { numberWithCommas } from "../utils/helper";

const CurrencyIcon = props => {
  if (!props.name) {
    return props;
  }
  switch (props.name.toLowerCase()) {
    case "naira":
      return <Naira {...props} />;
    case "dollar":
      return <Dollar {...props} />;
    case "pound":
      return <Pound {...props} />;
    default:
      return null;
  }
};

export const decodeCurrency = value => {
  const { activeCurrency } = store.getState();
  if (_isEmpty(activeCurrency)) {
    return;
  }
  if (!value) {
    return "";
  }

  if (value[value.length - 1] === ".") {
    return numberWithCommas(value);
  }

  if (value[value.length - 2] === "." && value[value.length - 1] === "0") {
    return numberWithCommas(value);
  }

  let newValue = new Decimal(value).dividedBy(activeCurrency.rateDollar);

  let val = newValue.toNumber().toString();

  if (val.includes(".")) {
    let newVal = val.split(".");
    if (newVal[1].length > 2) {
      val = val.slice(0, 2 - newVal[1].length);
    }
  }

  return numberWithCommas(val);
};

export const encodeCurrency = value => {
  const { activeCurrency } = store.getState();
  let val = value;
  if (_isEmpty(activeCurrency)) {
    return;
  }
  if (!val || val === "-") {
    return "";
  }

  if (val.split(".").length > 2 || val[val.length - 1] === "-") {
    val = val.slice(0, -1);
  }

  if (val[val.length - 1] === ".") {
    return val.toString();
  }

  if (val[val.length - 2] === "." && val[val.length - 1] === "0") {
    return val.toString();
  }

  if (val.includes(".")) {
    let newVal = val.split(".");
    if (newVal[1].length > 2) {
      val = val.slice(0, -1);
    }
  }

  let newValue = new Decimal(val).times(activeCurrency.rateDollar);

  return newValue.toString();
};

store.subscribe(decodeCurrency);

export default CurrencyIcon;
