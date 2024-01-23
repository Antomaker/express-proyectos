const mongoose= require('mongoose');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/notes';
mongoose.connect(MONGODB_URI).then(db=>console.log("se conecto a la base de datos"))
.catch(err=>console.log(err));