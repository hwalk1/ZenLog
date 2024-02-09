import React from "react";

const journalEntries = [
  {
    id: 1,
    title: "Day 1 Reflection",
    text: "Today was a good day. I spent some time meditating and felt very peaceful.",
    meditation: "10 minutes of mindfulness meditation",
  },
  {
    id: 2,
    title: "Day 2 Reflection",
    text: "Felt a bit anxious today, but after some deep breathing exercises, I was able to calm down.",
    meditation: "5 minutes of deep breathing",
  },
  // Add more entries as needed
];

const Journal = (id, title, text, meditation) => {
  return (
    <div>
      <h1>Journal Entries</h1>
      {journalEntries.map((entry) => (
        <div key={id}>
          <h2>{title}</h2>
          <p>{text}</p>
          <p>Meditation: {meditation}</p>
        </div>
      ))}
    </div>
  );
};

export default Journal;
