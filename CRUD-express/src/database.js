const mongoose= require('mongoose');

const MONGODB_URI = 'mongodb://myuser:example@localhost:27017/mydb';
mongoose.connect(MONGODB_URI).then(db=>console.log("se conecto a la base de datos"))
.catch(err=>console.log(err));