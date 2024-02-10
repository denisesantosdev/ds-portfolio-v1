import React from "react";

const TechBadge = (props) => {
  return (
    <li
      className="tooltip tooltip-info"
      data-tip={props.toolTip}>
        
      <div className={`badge px-3 py-1 h-max ${props.badgeStyle} bg-opacity-70 border-none`}>
        <div className="grid place-items-center text-secondary font-bold">
          <span>{props.icon}</span>
          <span>{props.text}</span>
        </div>
      </div>
    </li>
  );
};

export default TechBadge;
