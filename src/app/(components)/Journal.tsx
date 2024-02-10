import React from "react";

const Journal = ({ id, title, text, meditation }) => {
  return (
    <div>
      <div key={id}>
        <h2>{title}</h2>
        <p>{text}</p>
        <p>Meditation: {meditation}</p>
      </div>
    </div>
  );
};

export default Journal;
