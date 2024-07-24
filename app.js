const express = require ('express');
 const app=express();
 const PORT =process.env.PORT ||3000;
 app.use(express.json())
 app.use(express.urlencoded({ectended : true}))
 const writeRead=require('./books/writeRead');
 const updalete=require('./books/updalete');
 app.use('/books',writeRead);
 app.use('/book',up.dalete);

 app.use('/',function(req,res,next){
    res.sendStatus(404);
 });
 app.listen(PORT,()=>
    console.log('server running on port:'+PORT)
);