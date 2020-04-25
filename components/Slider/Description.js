import React from "react";

const Description = ({ eventName }) => {
  return (
    <div style={{padding: `1rem`, marginBottom: `1rem`, width: `100%`, minWidth: `100%`}}>
      <h3 className="name is-size-6">{eventName}</h3>
    </div>
  );
};

export default Description;
