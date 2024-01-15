const express=require('express');
const router= express.Router();


router.get('/',(req,res)=>{
    res.render('index.pug');
});

router.get('/login',(req,res)=>{
    res.render('login.pug');
});


module.exports= router;