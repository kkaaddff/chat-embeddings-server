import { OpenAIEmbeddings } from 'langchain/embeddings'

const OPENAI_BASE_PATH = process.env.OPENAI_BASE_PATH
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

// # 调用openai Embeddings
export function createOpenaiEmbeddings() {
  const embeddings = new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY }, { basePath: OPENAI_BASE_PATH })
  return embeddings
}
