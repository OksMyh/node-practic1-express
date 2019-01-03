const express = require('express');
app = express();
const path = require('path');


// app.use(express.urlencoded());
// app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
});
app.get('/info',(req,res)=>{
    console.log(req.query);
    res.json(`User with name *${req.query.name}* and password *${req.query.password}* is registered'`)
})

app.listen(3000,()=>{
    console.log('Lisening');
})