const express = require('express');
const morgan = require('morgan');
const app=express();

//requiriendo rutas
const routes=require('./routes');
const routesApi=require('./routes-api');
//settings 
app.set('appName','Mi primer server');
app.set('views',__dirname+ '/views');

app.set('view engine','pug');


//middlewares
app.use(morgan('dev'));


//rutas
app.use(routes);
app.use('/api',routesApi);

app.get('*',(req,res)=>{
    res.end('archivo no encotrado');
});

app.listen(3000, ()=>{
    console.log('servidor funcionando!');
    console.log('Nombre de la App:', app.get('appName'));
});