import { ChatOpenAI } from "langchain/chat_models/openai";
const chatModel = new ChatOpenAI({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function runChat(text) {
  try {
    const data = await chatModel.invoke(text);

    if (data) {
      return data;
    } else {
      console.log("No data received from the chat model.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
