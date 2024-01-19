const indexCtrl={};


indexCtrl.renderIndex=(req,res)=>{
    res.render('index.pug')
};

indexCtrl.renderAbout=(req,res)=>{
    res.render('about.pug')
};

module.exports=indexCtrl;