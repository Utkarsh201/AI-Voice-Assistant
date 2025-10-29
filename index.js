const express = require('express');

const app = express();

app.use(express.static(__dirname + './view'));
app.use(express.static(__dirname + './public'));
// read the static files 
console.log(__dirname + "./view");

console.log("server is running on the port 3000");
const server = app.listen(3000);
app.get('/' ,(req, res)=>{
    res.sendFile('index.html');
});

