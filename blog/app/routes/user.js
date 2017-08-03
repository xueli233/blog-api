let express = require('express');
let app = express();
let jwt = require('jsonwebtoken');
let User = require('../models/User');
let config = require('../../config');
app.set('superSecret',config.secret);

let apiRoutes = express.Router();
apiRoutes.post('/auth', (req, res) => {
  User.findOne({
    name: req.body.name
  },(err, user) => {
    //如果有错,返回错误
    if(err){return res.json({success:false, "message":"查询用户失败"+err})}
    //如果找不到用户
    if(!user){
      return res.json({success:false,message:'认证失败,找不到用户名'})
    } else if(user){ //如果有此用户验证密码
      if(user.password != req.body.password){
        return res.json({success:false,message:'认证失败,密码错误'})
      } else {
        //登录成功,创建token
        let token = jwt.sign(user,app.get('superSecret'),{
          expiresIn: 1440//设置过期时间
        });
        //返回token
        return res.json({
          success:true,
          message: 'Enjoy your token',
          token: token
        });
      }
    }
  });
});



module.exports = apiRoutes;
