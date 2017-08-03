//引入模块
let express = require('express');
let Blog = require('../models/blog');
let apiRoutes = express.Router();

apiRoutes.post('/',(req, res) => {
  let{id, body} = req.body;
  Blog.findByid(id, (err,blog) => {
    //如果抛出错误
    if(err){return res.json({success:false,message:'文章不存在'+err})}

    blog.comments.push({body});
    blog.save((err)=>{
      //如果抛出错误
      if(err){return res.json({success:false,message:'发布评论失败'})}
      //评论成功
      return res.json({success:true, message:'发布评论成功'})
    });
  });
});

module.exports = apiRoutes;