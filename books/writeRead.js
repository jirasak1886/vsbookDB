'use strict';
const express =require('express');
const crypto =require('crypto');
const wrRout =express.Router();
const connection =require('../db');

wrRout.post('/books',function(rep,res,next){
    let mypass = crypto.createHash("md5").update(req.body.password).digest("hex");
    connection.excute(`INSERT INTO books
        (id ,title,author,published_year,genre,available)
        LALUES(?,?,?,?,?,?);
        `,[rep.body.id,rep.body.title,rep.body.author,rep.body.published_year,rep.body.genre,rep.body.available]).then(()=>{
            console.log('ok');
            res.status(201).send("Insert success.");
        }).catch((err)=>{
            console.log(err);
            res.end();
        });
});
wrRout.get('/books',function(rep,res,next){
    connection.excute('SELECT*FROM books;').then((result)=>{
        var rawData=result[0];
        res.send(rawData);
    }).catch((err)=>{
            console.log(err);
            res.end();
    });
});
module.exports=wrRout