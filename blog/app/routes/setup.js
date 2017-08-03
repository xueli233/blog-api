let express = require('express');
let User = require('../models/user');

//创建管理员
let apiRoutes = express.Router();
apiRoutes.get('/',(req, res) => {
  let admin = new  User({
    name: 'admin',
    password: 'admin888',
    admin: true
  });
  admin.save((err) => {
    //如果抛出错误
    if(err){return res.json({success:false,message:'管理员创建失败'})}
    return res.json({success:true,message:'管理员创建成功'});
  });
});

module.exports = apiRoutes;