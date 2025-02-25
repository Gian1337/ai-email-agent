import { PipeI } from "@baseai/core";
import memoryEmailGeneratorMemory from "../memory/email-generator-memory";

const pipeAiAgentEmailGen = (): PipeI => ({
  // Replace with your API key https://langbase.com/docs/api-reference/api-keys
  apiKey: process.env.LANGBASE_API_KEY!,
  name: `ai-agent-email-gen`,
  description: ``,
  status: `public`,
  model: `groq:gemma2-9b-it`,
  stream: true,
  json: false,
  store: true,
  moderate: true,
  top_p: 1,
  max_tokens: 782,
  temperature: 0.39,
  presence_penalty: 0,
  frequency_penalty: 0,
  stop: [],
  tool_choice: "auto",
  parallel_tool_calls: true,
  messages: [
    {
      role: "system",
      content:
        "Based on the job description and my resume attached, write a compelling cold email tailored to the job, highlighting my most relevant skills, achievements, and experiences. Ensure the tone is professional yet approachable, and include a strong call to action for a follow-up or interview.",
    },
    { name: "json", role: "system", content: "" },
    { name: "safety", role: "system", content: "" },
    {
      name: "opening",
      role: "system",
      content: "Welcome to Langbase. Prompt away!",
    },
    { name: "rag", role: "system", content: "" },
  ],
  variables: [],
  tools: [],
  memory: [memoryEmailGeneratorMemory()],
});

export default pipeAiAgentEmailGen;
