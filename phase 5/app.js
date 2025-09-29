 import express, { urlencoded } from "express"
 import { userCollection,connectDB } from "./db/mongoconnect.js";
//  import { router } from "./routes/users.js";
import { registerUser,loginUser,reUser } from "./controllers/userController.js";
import userRouter from "./routes/users.js"
import session from "express-session";
 const app  = express()
 const port = 3030;
app.use(urlencoded ({extended:true}))
 app.set('view engine', 'ejs')
 app.use(session({
    
    secret : "IMBATMAN",
    resave: false,
    saveUninitialized: false
 }))
 
 app.use(userRouter)
 
 




 app.listen(port,()=>{
    console.log("server connect");
})
