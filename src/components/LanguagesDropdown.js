import React from "react";
import Select from "react-select";
import { customStyles } from "../constants/customStyles";
import { languageOptions } from "../constants/languageOptions";

const LanguagesDropdown = ({ onSelectChange}) => {
  return (
    <Select
      className="text-base px-2 py-2 rounded-md"
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[25]}
      onChange={(selectedOption) => {
        onSelectChange(selectedOption)
      }}
    />
  );
};

export default LanguagesDropdown;
