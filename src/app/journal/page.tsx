"use client";
import React from "react";
import { runChat } from "../langchain/init";
import { useState, useEffect } from "react";
import AudioPlayer from "../langchain/audioplayer";
export default function Journal() {
  const [audio, setShowAudio] = useState(false);
  const [chatText, setChatText] = useState("");
  const handleJournalDisplay = async (event) => {
    event.preventDefault();

    const text = (document.getElementById("journalEntry") as HTMLInputElement)
      .value;

    let entry = document.getElementById("entry");

    try {
      const data = await runChat(text);
      if (data) {
        // Set the content of the "entry" element to the value returned from runChat
        const textContent = data.content;

        // Set the content of the "entry" element to the value of the 'text' property
        if (entry) {
          setShowAudio(true);
          setChatText(textContent);
          entry.textContent = textContent;
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <>
      <div className="flex-col justify-center align-middle">
        <h1 className="text-primary justify-center flex text-4xl">zenlog</h1>
        <div className="">
          <form onSubmit={handleJournalDisplay}>
            <input
              id="journalEntry"
              name="Journal"
              placeholder="How do you feel?"
              className="min-w-full min-h-[400px] rounded mt-4"
            />
            <div className="flex justify-around align-middle">
              <button className=" mt-4 bg-secondary hover:bg-blue-500 text-primary font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded min-w-[70] max-h-10">
                Save
              </button>
              <input
                type="submit"
                value="Meditate"
                className=" mt-4 bg-primary hover:bg-blue-500 text-secondary font-semibold hover:text-white py-2 px-4 border-blue-500 hover:border-transparent rounded min-w-[60] max-h-10"
              />
            </div>
          </form>
        </div>
        <div id="entry"></div>
        {audio && <AudioPlayer text={chatText} />}
      </div>
    </>
  );
}
