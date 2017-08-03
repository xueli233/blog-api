let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
//引入本地文件
let categoryRouter = require('./app/routes/category');
let setupRouter = require('./app/routes/setup');
let userRouter = require('./app/routes/user');
let blogRouter = require('./app/routes/blog');
let commentRouter = require('./app/routes/comment');
//
let app = express();
let port = process.env.PORT || 8080;
let config = require('./config');
//连接数据库
mongoose.connet(config.database);
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
//设置路由
app.use('/category',categoryRouter);
app.use('/setup',setupRouter);
app.use('/user',userRouter);
app.use('/blog',blogRouter);
app.use('/comment',commentRouter);
//监听端口
app.listen(port);
console.log('Magic happends at http://localhost:'+port);
