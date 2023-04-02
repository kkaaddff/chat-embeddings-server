import { TextLoader } from 'langchain/document_loaders'
import { TokenTextSplitter } from 'langchain/text_splitter'

/**
 * 加载文档 paths
 */
export async function loaderDocs(docsPath) {
  const loader = new TextLoader(docsPath)
  const docs = await loader.load()
  return docs
}

/**
 * 文档切块
 * @param {import('langchain/document').Document[]} docs
 * @returns
 */
export function textSplitter(docs) {
  const splitter = new TokenTextSplitter({
    encodingName: 'gpt2',
    chunkSize: 1000,
    chunkOverlap: 0,
  })
  const doc_texts = splitter.splitDocuments(docs)
  return doc_texts
}
