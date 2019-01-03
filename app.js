const express = require('express');
app = express();
const path = require('path');


app.use(express.urlencoded());
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});
app.get('/info',(req,res)=>{
    console.log(req.query);
    res.json(`User with name *${req.query.name}* and password *${req.query.password}* is registered`);
});

//method post

app.post('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})
app.post('/info',(req,res)=>{
    res.json(`User with name *${req.body.name}and password *${req.body.password}* is registered`);
})
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000,()=>{
    console.log('Lisening');
})