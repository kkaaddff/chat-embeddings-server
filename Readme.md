# Chat Embeddings Server

> This is a simple server that provides a REST API for embedding chat messages from various chat services.
> 这是一个简单的服务器，它提供了一个 RESTAPI，使用嵌入技术优化 gpt-3.5 的回答，非常方便作为问答机器人使用。

## Usage

### 1. Install dependencies

```sh
# Install
npm install
```

### 2. Configure the server

在 start.sh 中配置好环境变量后，运行

```sh
export OPENAI_BASE_PATH=value
export OPENAI_API_KEY=key
```

### 3. Start the server

```sh
# Start
sh start.sh
```

### 4. Custom Data Source

- 使用 txt 文本数据
- 使用 python 的 jieba 库进行中文分词
