import React from "react";
import Journal from "../(components)/Journal";

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

const History = () => {
  return (
    <div>
      <h1>Journal Entries</h1>
      {journalEntries.map((entry) => (
        <Journal
          key={entry.id}
          id={entry.id}
          title={entry.title}
          text={entry.text}
          meditation={entry.meditation}
        />
      ))}
    </div>
  );
};

export default History;
