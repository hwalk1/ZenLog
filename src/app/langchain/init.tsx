import { ChatOpenAI } from "langchain/chat_models/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const chatModel = new ChatOpenAI({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are a world class meditator, you understand peoples problems from their journal entries, you break down the entry to a core theme, keep it to yourself and expertly give them a short meditation. Integrate symbols like ..., - '...', in many places to slow down reading speed of an e reader",
  ],
  ["user", "{input}"],
]);

export async function runChat(text) {
  try {
    const chain = prompt.pipe(chatModel);
    const data = await chain.invoke({
      input: `${text}`,
    });

    if (data) {
      return data;
    } else {
      console.log("No data received from the chat model.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
