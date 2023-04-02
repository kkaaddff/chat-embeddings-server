import { OpenAI } from 'langchain'
import { ChatVectorDBQAChain } from 'langchain/chains'
import path from 'path'
import { loaderDocs, textSplitter } from './docs.js'
import { createOpenaiEmbeddings } from './embeddings.js'
import { createVectorFromDocs } from './vector.js'

const OPENAI_BASE_PATH = process.env.OPENAI_BASE_PATH
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const __dirname = path.dirname(new URL(import.meta.url).pathname)

// # 创建聊天机器人对象chain
function createChatBot(vectorStore) {
  const chain = ChatVectorDBQAChain.fromLLM(
    new OpenAI(
      {
        openAIApiKey: OPENAI_API_KEY,
        modelName: 'gpt-3.5-turbo',
        temperature: 0,
      },
      { basePath: OPENAI_BASE_PATH },
    ),
    vectorStore,
    // { returnSourceDocuments: true,},
  )

  return chain
}

let chatBot = null

export const initChatBot = async () => {
  const docsPath = path.join(__dirname, './data/cut/cut_output.txt')
  const docs = await loaderDocs(docsPath)
  const doc_texts = await textSplitter(docs)
  const embeddings = createOpenaiEmbeddings()
  const vectorStore = await createVectorFromDocs(doc_texts, embeddings)
  chatBot = createChatBot(vectorStore)
}

export async function run(question) {
  console.log('############################## print start ##############################')
  console.log(`Question: ${question}`)
  const res = await chatBot.call({ question: `请使用中文回答：${question}`, chat_history: [] })
  console.log(`Answer: ${JSON.stringify(res)}`)
  console.log('############################## print end ##############################')
  return res
}
