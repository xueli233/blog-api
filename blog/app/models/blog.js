//引入模块
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Blog',new Schema({
   title: String,
   body: String,
   author: String,
   comments: [{
     body: String,
     date:Date
   }],
   tage:[{
     title: String
   }],
   date:{
     type: Date,
     default: Date.now,
   },
   hidden: Boolean,
   meta: {
     votes: Number,
     favs: Number
   }
 }));
