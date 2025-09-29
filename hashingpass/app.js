import express, { urlencoded } from "express"
import bcrypt from "bcrypt"
const app = express()
const port = 3030;

// middleware

app.use(urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','ejs') 

const users = []

app.get('/password',(req,res)=>{
    res.render("passing")
})
app.post("/password",async(req,res)=>{
    try{

    
    const {username,password} = req.body ;
    const saltRounds = 10;
    const hash = await bcrypt.hash(password,saltRounds)

    users.push({
        username,
        password:hash

    })
    console.log(users);
    res.send(hash)
}
catch(err){
    console.log(err);
    
}  

    
})

app.listen(port,(req,res)=>{
    console.log(`Port :${port} connected`);
    
})
