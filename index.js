const port = process.env.PORT || 8090
const express = require('express');
const databaseConnect = require('./config/dbConnect');

const app = express();

app.listen(port,()=>{
    console.log("server listening on port "+port);
    databaseConnect();
})