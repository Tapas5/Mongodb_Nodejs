const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 3000;


const connect_database = async()=>{
    
try{
    await mongoose.connect('mongodb://localhost:27017/test_connection')
    console.log("database is connected")
}catch(error){
    console.log("database is not connected");
    console.log(error.message);
    process.exit(1);
}

}

app.listen(port,async()=>{
    console.log(`server is running at http://localhost:${port}`);
    await connect_database();
});
