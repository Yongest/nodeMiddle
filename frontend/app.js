
const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const path = require('path')


// 开放publick目录资源
app.use('/public/',express.static(path.join(__dirname,'./public/')))

 nunjucks.configure(path.join(__dirname,'./view'), {
    autoescape: true,
    express: app,
    watch:true //禁止模板文件缓存，文件改变，重新预编译，建议开发阶段使用
});

//  app.get('/',(req,res,next)=>{
//     res.status(200).send('hello world')
//  })

app.get('/', function(req, res,next) {
    res.render('index.html',{
        fool:'i am nunjucks!!'
    });
});



 app.listen(3000,()=>{

        console.log('服务启动成功。')
        console.log(`http://localhost:3000/`)
 })