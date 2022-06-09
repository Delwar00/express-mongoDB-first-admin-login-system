const express=require('express');
const colors=require('colors');
const dotenv=require('dotenv');
const mongoDBconnect=require('./config/db');

//db initialize
mongoDBconnect();
const app=express();
//environment setup
dotenv.config();
PORT=process.env.SERVER_PORT;

//express setup for post format data submit
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//students routes
app.use('/api/students',require('./routes/students'));

//admin routes
app.use('/api/admin',require('./routes/admin'));


//app listener
app.listen(PORT,()=>{
    console.log(`Our Server is running on ${PORT} port`);
})
