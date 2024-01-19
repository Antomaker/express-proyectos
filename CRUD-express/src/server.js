const express = require('express');
const path = require('path');
const morgan=require('morgan');
const methodOverride=require('method-override');
// Initializations
const app= express();
// setting
app.set('port',process.env.PORT||4000);
app.set('view engine', 'pug');
app.set('views', [
    path.join(__dirname, 'views', 'layouts'),
    path.join(__dirname, 'views', 'partials'),
    path.join(__dirname,'views'),
    path.extname('.pug')
]);

//Middlewarns
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
//global var


//routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
//static files
app.use(express.static(path.join(__dirname,'public')));
module.exports=app;