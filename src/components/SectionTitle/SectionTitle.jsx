import React from "react";

const SectionTitle = (props) => {
  return (
    <div className={`${props.textAlign} mb-10`}>
      <h2 className="text-3xl font-bold mb-3">// {props.text}</h2>
      <p>
        {props.subtitleText}
      </p>
    </div>
  );
};

export default SectionTitle;
