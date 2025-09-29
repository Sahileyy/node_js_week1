import express from 'express'
const app = express()
const port = 3030;

app.use(express.json())

app.get('/user/:name/:place',(req,res)=>{

})


app.listen(port,(req,res)=>{
    console.log("server connect");
    
})