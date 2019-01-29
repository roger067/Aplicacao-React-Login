import React from "react";
import { Link } from "react-router-dom";

const Buttons = props => {
  return (
    <Link to={props.link}>
      <button type={props.typeButton} className="btn btn-primary">
        {props.nameButton}
      </button>
    </Link>
  );
};

export default Buttons;
