import { ChatOpenAI } from "langchain/chat_models/openai";

async function runChat() {
  const chatModel = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

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
