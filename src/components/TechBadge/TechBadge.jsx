import React from "react";

const TechBadge = (props) => {
  
  return (
    <li
      className="tooltip tooltip-primary"
      data-tip={props.toolTip}>
        
      <div className={`badge h-max bg-opacity-70 border-none`}>
        <div className="grid gap-3 place-items-center text-secondary">
          <span>{props.icon}</span>
          <span>{props.text}</span>
        </div>
      </div>
    </li>
  );
};

export default TechBadge;
