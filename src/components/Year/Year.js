import React from "react";

import classes from "./Year.module.css";

const Year = (props) => {
  return (
    <div
      className={`${classes.YearItems} ${
        props.children === props.clgYear ? classes.ActiveYear : null
      }`}
      onClick={props.clicked}
    >
      <i className="fas fa-graduation-cap"></i> {`Year ${props.children}`}
    </div>
  );
};

export default Year;
