# NodeJs+MongoDB的单用户博客API系统
## 文件结构
- blog
  - app
    - models
      - blog.js
      - category.js
      - user.js
    - routes
      - blog.js
      - category.js
      - comment.js
      - setup.js
      - user.js
  - readme.md
  - config.js
  - package.json
  - server.js
## 文件 
- blog.js
## 模型
- 用户user
```
{
  name:String,
  password:String,Boolean
}
```
- 分类
```
{
  title: String,
  meta: {
    blog_count:Number
  }
}
```
- [x] 博客模型
```
{
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
}
```
### API列表
- 2.注册管理员 
  - '/auth'
- 3.登录,注册 
  - 'api_user' 
  - 参数: name,password,register | login | check
- 4.发布博文
- 9.删除博文
- 8.修改博文
- 10.删除评论
- 1.博文分类
- 5.分页显示博文
- 6.根据分类显示出博文
- 7.发布评论
- 11.点赞功能

