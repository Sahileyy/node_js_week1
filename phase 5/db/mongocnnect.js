import {mongoclient} from  'mongodb' 
const uri = "mongodb://127.0.0.1:27017"
const client = new mongoclient (uri)

export let userCollection;

export async function connectDB() {
    try{
    await client.connect()
    db =  client.db("people")
    userCollection = db.collection('workers')
    }
    catch (err){
        console.log(err);
        
    }
    
}
connectDB()
