import React from "react";

const BtnPrimary = (props) => {
  return (
    <a
      href={props.url}
      className="btn btn-primary">
      {props.text}
      {props.icon}
    </a>
  );
};

export default BtnPrimary;
