import React from "react";

const KeyValuePair = ({ value, keyName }) => {
  return (
    <div className="key-value-wrapper">
      <span className="key-name">{keyName}</span>
      <span className="hyphen-name">:</span>
      <span className="value-name">{value}</span>
    </div>
  );
};
export default KeyValuePair;
