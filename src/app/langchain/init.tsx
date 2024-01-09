import { ChatOpenAI } from "langchain/chat_models/openai";
// const chatModel = new ChatOpenAI({
//   openAIApiKey: process.env.OPENAI_API_KEY,
// });

export async function runChat(text) {
  console.log(process.env.OPENAI_API_KEY);
  try {
    const data = await chatModel.invoke(text);

    if (data) {
      console.log(data);
    } else {
      console.log("No data received from the chat model.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
