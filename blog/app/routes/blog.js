//引入模块
let express = requir('express');
let Blog = require('../models/blog');

var apiRoutes  = express.Router();
//显示所有的博客
apiRoutes.get('/', (req,res) => {
  let {category} = req.query;
  let whereObj = {};
  if(category){
    let reg = RegExp('^'+category+'$');
    whereObj = {category: reg}
  }
  Blog.find(whereObj, (err, blogs) => {
    if(err){
      return res.json({success: false, "message" : "查找所有的博客失败" + err});
    }
    return res.json({success:true, data:blogs});
  });
});
//发布博客
apiRoutes.post('/', (req, res) => {
  let {title,body,author,tags,hidden,category} = req.body;
  if(title.length <3){
    return res.json({success:false,"message":"博客标题不能小于3位"});
  }
  //tags转换对象数组
  let tagsArray = tags.split(',');
  let tagsObjArray = [];
  tagsArray.forEach(() => {
    tagsObjArray.push({title:v});
  });

  let blog = new Blog({
    title,
    body,
    author,
    category,
    tags: tagsObjArray,
    hidde
  });
  blog.save((err) => {
    if(err){
      return res.json({success:false,"message":"博客发布失败" + err})
    }
    return res.json({success:true,"message":"博客发布成功"});
  });
});

module.exports = apiRoutes;