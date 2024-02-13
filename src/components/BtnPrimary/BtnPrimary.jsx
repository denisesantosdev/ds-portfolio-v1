import React from "react";

const BtnPrimary = (props) => {
  return (
    <a
      href={props.url}
      className="btn btn-primary btn-outline text-lg">
      {props.text}
      {props.icon}
    </a>
  );
};

export default BtnPrimary;
