
 import { MongoClient } from 'mongodb';
 const uri ='mongodb://127.0.0.1:27017'
 const client = new MongoClient(uri);

 export let userCollection;

 export async function connectDB() {
    try {
        await client.connect();
        console.log("connected");
        

        let db =  client.db('testdb')
        userCollection =  db.collection('users');

    } catch (error) {
       console.log(error);
        
    }
 }

connectDB();


   
