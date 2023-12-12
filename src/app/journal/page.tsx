"use client";
import React from "react";
export default function Journal() {
  const handleJournalDisplay = (event) => {
    event.preventDefault();

    const text = (document.getElementById("journalEntry") as HTMLInputElement)
      .value;

    let entry = document.getElementById("entry");

    if (entry) {
      entry.textContent = text;
    }

    console.log(text);
  };
  return (
    <>
      <div className="flex-col justify-center align-middle">
        <h1 className="text-primary justify-center flex text-4xl">zenlog</h1>
        <form onSubmit={handleJournalDisplay}>
          <textarea
            id="journalEntry"
            name="Journal"
            rows={4}
            cols={50}
            placeholder="How do you feel?"
          />
          <br />
          <br />
          <input
            type="submit"
            value="Meditate"
            className="bg-primary hover:bg-blue-500 text-secondary font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded min-w-full"
          />
        </form>
        <div id="entry"></div>
      </div>
    </>
  );
}
