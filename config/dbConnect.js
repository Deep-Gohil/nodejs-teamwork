const mongoose = require('mongoose');

const databaseConnect = () =>{
    mongoose.connect("mongodb+srv://deep888gohil:nodejs-teamwork@cluster0.1gr4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",()=>{
        console.log("Connected to MongoDB");
    })
}

module.exports = databaseConnect;