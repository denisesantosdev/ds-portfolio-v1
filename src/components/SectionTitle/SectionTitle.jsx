import React from "react";

const SectionTitle = (props) => {
  return (
    <div className={`${props.textAlign} mb-16`}>
      <h2 className="text-3xl font-bold mb-3 font-heading ">// {props.text}</h2>
      <p className="leading-loose opacity-65">
        {props.subtitleText}
      </p>
    </div>
  );
};

export default SectionTitle;
