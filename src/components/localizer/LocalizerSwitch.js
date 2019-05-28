import React from "react";
import { withLocalize } from "react-localize-redux";

import { DropDown } from "../common";

const onLangSelected = (code, setActiveLanguage) => {
  setActiveLanguage(code);
};

const getLanguageArray = array => {
  if (!array) {
    return;
  }
  let arrayReturn = [];
  array.map((array, index) => {
    arrayReturn.push({
      value: array.code,
      content: <span>{array.code.toUpperCase()}</span>
    });
    return null;
  });
  return arrayReturn;
};

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => {
  if (!languages || languages.length < 1) {
    return null;
  }

  return (
    <DropDown
      active={activeLanguage ? activeLanguage.code : "fr"}
      options={getLanguageArray(languages)}
      onChange={e => {
        onLangSelected(e.value, setActiveLanguage);
      }}
      dropDownWidth="80px"
    />
  );
};

export default withLocalize(LanguageToggle);
