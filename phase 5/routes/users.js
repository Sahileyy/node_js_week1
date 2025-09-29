import express from "express"
import { loginUser, registerUser,newUser, reUser, adminPanel, adminPanelware,logout, switchStatus } from "../controllers/userController.js"
import { sessioncheck } from "../controllers/userController.js"
const router = express.Router()



router.get('/register1', registerUser)
router.get("/login1",loginUser)
router.post("/register1",newUser)
router.post('/login1',reUser)
router.get('/adminview',adminPanelware,adminPanel)
router.use(sessioncheck)
router.get('/home',(req,res)=>{
    res.render('home',{Username:req.session.username})
    
})

router.get('/adminview/:_id',switchStatus)
router.get('/logout',logout)


export default router;