import express from 'express'
import cors from 'cors'
import { initChatBot, run } from './src/index.js'

const app = express()
const port = 3000

await initChatBot()

// 允许所有来源的请求
app.use(cors())
app.use(express.json()) // 解析 JSON 格式的请求体
app.use(express.urlencoded({ extended: true })) // 解析 URL 编码格式的请求体

app.post('/', async (req, res) => {
  const question = req?.body?.question ?? '没有问题'
  const answer = await run(question)
  res.send(answer) // 返回响应
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
