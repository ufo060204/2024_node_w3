// 套件引入
var express = require('express'); // express
var path = require('path'); // 路徑
var cookieParser = require('cookie-parser'); // 解析 cookie
var logger = require('morgan'); // 輸出日誌
var cors = require("cors"); // 跨來源資源共用

// 資料庫設定開始
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/testPost4')
//     .then(res=> console.log("連線資料成功"));
// 資料庫設定結束

// router 路由引入
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');

// express 設定
var app = express();
require('./connections');

app.use(logger('dev')); // 日誌
app.use(express.json()); // 解析 json 資料
app.use(express.urlencoded({ extended: false })); // 解析 post 資料
app.use(cookieParser()); // 解析 cookie
app.use(express.static(path.join(__dirname, 'public'))); // 靜態檔案
app.use(cors()); // 跨來源資源共用

app.use('/users', usersRouter);
app.use('/api/posts', postsRouter);

module.exports = app;
