let express = require('express');
let Category = require('../models/category');//引入模型
//路由管理模块
let apiRoutes = express.Router();
//添加分类
apiRoutes.post('/',(req,res) => {
  let title =req.body.title;
  let category = new Category({title});
  //
  category.save( (err) => {
    //如果抛出错误
    if(err){return res.json({success:false, message:'添加分类失败'})}
    return res.json({success:true,message:'添加分类成功'})
  });
});
//显示分类
apiRoutes.get('/',(req, res) => {
  Category.find( (req,categories) => {
    return res.json({
      'success': true,
      'message': '获取分类成功',
      'data': categories
    });
  });
});
//更新分类
apiRoutes.put('/',(req,res) => {
  let {title, newtitle} = req.body;
  Category.findOneAndUpdate({'title':title},{'title': newtitle},(err,category) => {
    //如果抛出错误
    if(err){
      return res.json({
        'success': false,
        'message': '更新分类失败'
      });
    }
    //成功
    return res.jsonj({
      'success': true,
      'message': '更新分类成功'
    });
  });
});
//删除分类
apiRoutes.delete('/',(req,res) => {
  let {title} = req.body;
  Category.remove({title:title},(err) => {
    //如果抛出错误
    if(err){return res.json({success:false,message:'分类删除失败,请联系管理员'})}
    //成功
    return res.json({
      success: true,
      message: '分类删除成功'
    });
  });
});

module.exports = apiRoutes;
