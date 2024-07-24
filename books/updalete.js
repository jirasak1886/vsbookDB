'use strict';
const express =require('express');
const upRout =express.Pouter();
const connection =require('./db');
upRout.put('/books',function(rep,res,next){
    connection.excute("UPDATE books SET title=?,author=?,published_year=?,genre=?,available=? WHERE id=?;"
        [rep.body.title,rep.body.author,rep.body.published_year,rep.body.genre,rep.body.available,rep.parms.uid]
     ).then((result)=>{
        console.log('ok');
    }).catch((err)=>{
            console.log(err);
            res.end();
    });
});
upRout.delete('/books',function(rep,res,next){
    connection.excute("DELETE FROM books  WHERE id=?;"
        [rep.parms.uid]
     ).then((result)=>{
        console.log('ok');
    }).catch((err)=>{
            console.log(err);
            
    });
    res.end();
});
upRout.delete('/',function(rep,res,next){
    res.sendStatus(404);
});
module.exports=upRout