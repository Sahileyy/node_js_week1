import express from "express";
import {connectDB, userCollection} from "./views/config.js"


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");

// await connectDB();

app.post('/signup',async(req,res)=>{
    try{

    const data = {
        name: req.body.username,
        password: req.body.pass
    }
    console.log(data);
    
   
    
    const signin_data = await userCollection.insertOne(data)
    console.log(signin_data);
    res.render('signup')
   

}
catch(err){
console.log(err);

}

// ********************************************************

})


app.post('/login1',async(req,res)=>{
   try{
        const data = {
            name : req.body.username,
            password : req.body.pass
        }
        console.log(data);
        
        const login_data = await userCollection.findOne(data)

        console.log(login_data);

        if(login_data){
            res.render('home')
        }else{
            res.send("invalid user")
        }

    }
    catch(err){
        console.log(err);
        
    }


})



app.get('/login1',async(req,res)=>{
    
     res.render("login")
 
})

app.get('/viewsignup',(req,res)=>{
    res.render('signup')
})

const port = 3030;
app.listen(port,(req,res)=>{
    console.log(`SERVER RUNNING ON :${port}`);
    
})