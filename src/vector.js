import { HNSWLib } from 'langchain/vectorstores'

// # 向量化
export async function createVectorFromDocs(docs, embeddings) {
  const vectorStore = await HNSWLib.fromDocuments(docs, embeddings)
  return vectorStore
}

export async function loadVectorFromDir(embeddings) {
  const directory = './vector'
  const loadedVectorStore = await HNSWLib.load(directory, embeddings)
  return loadedVectorStore
}

export async function saveIndex(vectorStore) {
  const directory = './vector'
  await vectorStore.save(directory)
}
