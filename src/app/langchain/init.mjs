import { ChatOpenAI } from "langchain/chat_models/openai";

const chatModel = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const data = await chatModel.invoke("what is LangSmith?");

if (data) {
  console.log(data);
}
