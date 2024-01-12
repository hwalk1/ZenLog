export async function textConversion(text: string) {
  console.log(process.env.NEXT_PUBLIC_ELEVEN_LABS_API_KEY);
  console.log({ text });
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
      // This api key isnt being sent through to the Post request
      "xi-api-key": process.env.NEXT_PUBLIC_NEXT_PUBLIC_ELEVEN_LABS_API_KEY,
    },
    // This body is passing through as an object, but it looks like we need a string
    /* {
    "detail": [
        {
            "loc": [
                "body",
                1
            ],
            "msg": "Expecting value: line 1 column 2 (char 1)",
            "type": "value_error.jsondecode",
            "ctx": {
                "msg": "Expecting value",
                "doc": "[object Object]",
                "pos": 1,
                "lineno": 1,
                "colno": 2
            }
        }
    ]
}
*/
    body: {
      model_id: "eleven_monolingual_v1",
      text: { text },
      voice_settings: {
        similarity_boost: 123,
        stability: 123,
        style: 123,
        use_speaker_boost: true,
      }'
    },
  };

  fetch("https://api.elevenlabs.io/v1/text-to-speech/{voice_id}", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
