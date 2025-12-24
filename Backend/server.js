const express = require('express');
const cors = require('cors');
// cors 

const app = express();
// middleware(cores)

app.use(cors());// cross origin Resourse sharing
app.use(express.json());
// http://localhost:3000/api/hello / Origin A
//protocol + domain + port

//http://localhost:5174  // Origin B

//angular app port 


app.get('/api/hello',(req,res)=>{
    res.json({
        message: "Hello from the Express bacend"
    })
})

app.post('/api/login',(req,res)=>{
    const {username} = req.body;
    res.json({
        status: "success",
        user:username
    })
})

app.listen(3000,()=>{
    console.log("Express is running on http:/localhost:3000");
    
})