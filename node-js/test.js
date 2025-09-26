// const express = require("express")
// const app = express();
// const port = 3000;

// app.get('/',(req,res)=>{
//     res.send('Hi im SAHIL');
// });

// app.post('/',(req,res)=>{
//     res.send('post req ahnu')
// })

// app.put('/',(req,res)=>{
//     res.send('put req ahnuu')
// })

// app.delete('/',(req,res)=>{
//     res.send('delete aaki')
// })

// app.listen(port,()=>[
//     console.log('Hi server')
// ])



// const express = require ('express')
// const app = express()
// const port = 4000;

// app.use(express.json())


// app.get('/home',(req,res)=>{
//     res.status(404)
//     .json('Njan json')
// })

// let book =[]

// app.post('/contact', (req,res)=>{
//     const data = req.body;
//     console.log(data);
    
//     const result = book.push(data);
//     console.log(result);
//     res.send(result)
    
// });


// app.listen(port,()=>{
//     console.log("govi");
    
// })




const express = require('express')
const app = express()
const port = 3030;




app.use(express.json())
 
let books =[{book:'dracula'},{book:'atomic habbits'}];

app.get('/books',(req,res)=>{
    // const info = req.body
    res.send(books)
})

app.post('/books',(req,res)=>{
    const data = req.body
    console.log(data);
    
     books.push(data)
    
    console.log(books);
    res.send(books)
    
});

// app.put('/books/:name',(req,res)=>{
//     const id = (req.params.name)
//     const newBook = req.body.book
//     res.send(`books ${id} updated to: ${newBook}`)
// })


// app.delete('/books/:id',(req,res)=>{
//     books.splice(0,1)
//     res.send(books)
// })

// app.get('/users/:id',(req,res)=>{
//     const userInfo = req.params.id
//     res.send(`user Id: ${userInfo}`)
// })

// app.listen(port,()=>{
//     console.log("success");
    
// })


// app.get('/Info/:id',(req,res)=>{
//     const newInfo = req.params.id
//     res.status(200).json({id:newInfo,
//         name:'PHILIP'});
    
// })


