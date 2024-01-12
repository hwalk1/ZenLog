async function textConversion(text: string) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
      "xi-api-key": "<xi-api-key>",
    },
    body: {
      model_id: "eleven_monolingual_v1",
      text: { text },
      voice_settings: {
        similarity_boost: 123,
        stability: 123,
        style: 123,
        use_speaker_boost: true,
      },
    },
  };

  fetch("https://api.elevenlabs.io/v1/text-to-speech/{voice_id}", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
