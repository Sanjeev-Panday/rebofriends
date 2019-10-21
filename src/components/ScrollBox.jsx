import React from "react";
import "./ScrollBox.css";
const ScrollBox = props => {
  return <div className="scrollbox">{props.children}</div>;
};
export default ScrollBox;
