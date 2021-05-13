import React from "react";
import "./SearchBox.styles.css";

export default function SearchBox(props) {
  const { placeHolder, handleChange, searchTerm } = props;
  return (
    <input
      className="search"
      value={searchTerm}
      type="text"
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
}
