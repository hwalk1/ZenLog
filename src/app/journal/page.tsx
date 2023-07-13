"use client";
export default function Journal() {
  const handleJournalDisplay = (event) => {
    event.preventDefault();
    const text = (document.getElementById("journalEntry") as HTMLInputElement)
      .value;
    let entry = document.getElementById("entry");
    entry.textContent = text;

    console.log(text);
  };
  return (
    <>
      <h1>zenlab</h1>
      <h2>Daily Journal</h2>
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
        <input type="submit" value="Meditate" />
      </form>
      <div id="entry"></div>
    </>
  );
}
