/*
  入口文件：
    1. 使用连接数据库模块
    2. 引入Model，从而能对数据库进行操作
 */
//  1. 使用连接数据库模块（引入加载模块所有代码，连接数据库）
// require('./db');

// 2. 引入Model，从而能对数据库进行操作
// const User = require('./models/UserModel')
const mongoose = require('mongoose')
// const fs = require('fs')
// 引入express
const express = require('express')
var session = require('express-session')
const http = require('http')

const app = express()
const server = http.createServer(app)
// 声明使用静态中间件
app.use(express.static('public'))
// 声明使用解析post请求的中间件
app.use(express.urlencoded({ extended: true })) // 请求体参数是: name=tom&pwd=123
app.use(express.json()) // 请求体参数是json结构: {name: tom, pwd: 123}
// 声明使用解析cookie数据的中间件
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// 声明使用session处理的中间件
app.use(session({
  secret: '12345',
  cookie: { maxAge: 1000 * 60 * 60 * 24 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
  resave: false,
  saveUninitialized: true,
}))

// 声明使用路由器中间件
const indexRouter = require('./routers')
app.use('/', indexRouter)

// 在路由器中间之后, 处理所有与路由器中间的路由不匹配的请求
/*app.use((req, res) => {
  console.log('--------')
  fs.readFile(__dirname + '/public/index.html', (err, data)=>{
    if(err){
      console.log(err)
      res.send('后台错误')
    } else {
      res.writeHead(200, {
        'Content-type': 'text/html',
        'Connection':'keep-alive'
      })
      res.end(data)
    }
  })
})*/

// 通过mongoose连接数据库
mongoose.connect('mongodb://localhost/userInfo1', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => {
    console.log('连接数据库成功!!!')
    // 只有当连接上数据库后才去启动服务器
    server.listen('5000', () => {
      console.log('服务器启动成功, 请访问: http://localhost:5000')
    })
  })
  .catch(error => {
    console.error('连接数据库失败', error)
  })

