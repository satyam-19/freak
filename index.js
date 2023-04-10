
const express = require('express');
const path = require('path');
const port = 5000;

const db = require('./config/mongoose');
const Data = require('./models/data');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));



app.get('/',function(req,res){
    return res.render('landing');
});
app.get('/index',function(req,res){
    return res.render('landing');
});
app.get('/contact',function(req,res){
    return res.render('contact');
});
app.get('/details',function(req,res){

    Data.find({},function(err,data){
        if(err){
        console.log('error in fetching data from db');
        return;
        }
        return res.render('details',{
        title: "Details of Users",
        details_list: data
        });

    });
});

app.post('/set-data',function(req,res){
    Data.create({
        name: req.body.name,
        phone: req.body.phone,
        gender: req.body.gender,
        lang: req.body.lang,
        agree: req.body.agree
    },function(err,newData){
        if(err){
            console.log('error in creating a data',err);
            // console.log(req.body.lang);

            return;
        }
        console.log('************',newData);
        return res.redirect('/contact');
    });
});
  



app.listen(port,function(err){
    if(err){
        console.log('error' , err);
    }
    else{
        console.log('server is up ', port);
    }
})