import { ChatOpenAI } from "langchain/chat_models/openai";
const chatModel = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

async function runChat() {
  try {
    const data = await chatModel.invoke("what is LangSmith?");

    if (data) {
      console.log(data);
    } else {
      console.log("No data received from the chat model.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
