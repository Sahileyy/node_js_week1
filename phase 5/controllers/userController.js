import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';

export const registerUser = (req, res) => {
    res.render("register",{message:null})
}

export const loginUser = (req, res) => {
    res.render("login")
}





import { userCollection } from "../db/mongoconnect.js"
import { Admin } from 'mongodb';

// ******************************************************RegisterUser***************************************************//

export const newUser = async (req, res) => {

    try {
        const {
            username,
            email,
            pass,
            pass2
        } = req.body;

        console.log(req.body);

        const hash = await bcrypt.hash(pass, 10)
        const email_check = await userCollection.findOne({ email: email })
        
        // const pass_check = pass === pass2
        if (pass !== pass2) {
          return res.render("register",{message:"invalid credentials"})           
        }


        if (!email_check ) {
            const user_data = await userCollection.insertOne({
                name: username,
                password: hash,
                email: email,
                role: "user",
                status: "active"
            })
        }
        // res.send("success fully registered")
        res.redirect('/login1')
    }


    catch (erer) {
        console.log(erer);

    }
}



// *************************************************LoginUser*********************************************************************//


export const reUser = async (req, res) => {
    try {
        const {
            username,
            email,
            pass
        } = req.body
        const loginData = req.body

        // console.log(loginData);

        // const hash = bcrypt.hash(pass,10);

        const email_check = await userCollection.findOne({ email: email })
        console.log(email_check);


        if (!email_check) {
            return res.send("no user found")
        }
        const pass_check = await bcrypt.compare(pass, email_check.password)

        if (!pass_check) {
            return res.send("wrong password")
        }

        //  req.session.userInfo =  email_check.name,
        req.session.role = email_check.role;
        req.session.username = email_check.name
        //  console.log(req.session.role);


        if (req.session.role === "admin") {

            // console.log(email_check);
            // console.log(findAll);

            return res.redirect('/adminview')

        }
        if (req.session.role === "user") {
            return res.redirect("/home")
        }
        res.send("error")

    }
    catch (erer) {
        console.log(erer);

    }
}




// ******************************************************gohomecheck****************************************************************//

export function sessioncheck(req, res, next) {
    if (!req.session.role) {
        return res.redirect('/login1')
    }
    else {
        return next()
    }
}



export async function adminPanel(req, res) {
    const findAll = await userCollection.find({ role: { $ne: 'admin' } }).toArray()
    res.render('admin', { findAll })
}


// ************************************************************middleware*****************************************************************


export async function adminPanelware(req, res, next) {
    if (req.session.role === 'admin') {
        next()
    }
    else {
        res.send("NO authority")
    }
}


export async function logout(req, res) {
    req.session.destroy()
    res.send("logout success")
}

export async function switchStatus(req, res) {
    const param = req.params._id
    console.log(param);
    const statusStore = await userCollection.findOne({_id: new ObjectId(param)})
    console.log(statusStore);
    

   if(statusStore.status === "active"){
    console.log("came in");
    
    const res =  await userCollection.updateOne({_id: new ObjectId(param)},{$set:{status:"inactive"}})
    console.log(res);
    
   }

   if(statusStore.status === 'inactive'){
   const res = await userCollection.updateOne({_id: new ObjectId(param)},{$set:{status:"active"}})      
   console.log(res);
   
   }
   res.redirect('/adminview')


}