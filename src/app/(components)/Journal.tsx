import React from "react";

const Journal = ({ id, title, text, meditation }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-secondary m-3">
      <div key={id}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 ">{title}</div>
        </div>
        <p className="text-gray-700 text-base m-3">{text}</p>
        <p className="mt-3 font-bold">Meditation: {meditation}</p>
      </div>
    </div>
  );
};

export default Journal;
