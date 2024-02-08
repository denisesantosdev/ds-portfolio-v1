import React from "react";

const TechBadge = (props) => {
  return (
    
      <li
        className="tooltip tooltip-info"
        data-tip={props.toolTip}>

        <div 
            className="badge badge-outline p-4">
        <span>{props.icon}</span>
        <span>{props.text}</span>
        </div>
      </li>
    
  );
};

export default TechBadge;
