const http = require('http')
const url = require('url')
const qs = require('querystring')

// 启用一个服务器
const server = http.createServer()

// 处理跨域
const setHeader = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
}

// 路由
const useRouters = (req, res) => {
  const router = url.parse(req.url).pathname
  if (req.method === 'OPTIONS') return res.end()
  if (router === '/') {
    return res.end(JSON.stringify({ username: 'zhangsan', password: '123456' }))
  } else if (router === '/upload' && req.method === 'POST') {
    return res.end('123')
  }
  res.end('404')
}

server.on('request', (req, res) => {
  setHeader(req, res)
  // 根据前端传过来的方法以及路径名 处理不同数据并返回  => 后端路由的诞生
  useRouters(req, res)
})

server.listen(8888, () =>
  console.log('server listening on  http://localhost:8888')
)
