let books = [
  { id: 1, title: "The Pragmatic Programmer", author: "David Thomas", genre: "Tech", available: true },
  { id: 2, title: "Educated", author: "Tara Westover", genre: "Memoir", available: true },
  { id: 3, title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", available: false },
  { id: 4, title: "Sapiens", author: "Yuval Noah Harari", genre: "History", available: true },
  { id: 5, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", available: true },
];

let nextId = 6; // use this for any new book you create

//Part 1: Start the Server
const express = require("express");
const app = express();

// it lets your server read JSON that's sent to it. 
// Without it, req.body will always be empty.
app.use(express.json()); 

//test if the server working:
// app.get("/", (req, res) => {
//   res.send("THIS IS BOOKS API 123456");
// });

//Part 2: Your First Route
//Write the smallest possible route first, before touching your book data.
app.get("/", (req, res) => res.send("Books API is running"));

//Part 3:GET All Books
//Why: This is the simplest way to read data — send back the whole list.
app.get("/api/books", (req, res) => res.json(books));

//Part 4: GET One Book by Id
//-----first try: 
// app.get("/api/books/:id", (req, res) => {
//   Number(req.params.id ){
//     newArry = books.map((book)=>{
//       if book.id === GET/api/books/id ? ture : false
//     })
//   }
//  })
// we don't need .map for it, cz it allows us to modify, we don't need it. we just need to 
// look for it, so we use different method.

 //revised:
 app.get("/api/books/:id", (req, res) => {
  const id = Number(req.params.id)  //this value is always a string, 
                                    // this is wrap it in the Number()
  const book = books.find((book) =>{ // anytime use {} we need a return otherwides, if it one line, we don't need it.
    return book.id === id
  })
  //console.log(book) -- check out if the objects that exist.

  // This is the step which if no book matches, send back(res) 404, and stop return.
  if (!book){
    return res.status(404).json(// json accepted a string
      'There is no book matches.'
    ) // return is not a function, it doesn't need a(), {}. Here need a () after .json
  }else{
    return res.json(book)
  }

 });

//Part 5: POST a New Book
// -----first try:  
// app.post("/api/books", (req, res) => {
//   const {title , author , genre} = req.body // split the properties as a single items.
//                                             // put values into separate variables. 
//   // This created an arry, but instruction saying this should be an object.                                     
//   // newBook = [ 
//   //   {id : nextId} 
//   //   newBook.nextId = nextId + 1
//   // ]

//   // books.push(newBook)
//   // res.newBook.json
//   // res.status(201).json

//  })

//revised---second try:
 app.post("/api/books", (req, res) => { // if i have two post,then it won't work.
  const {title , author , genre} = req.body

  const newBook = {
    id: nextId,
             // these are the same, could use both way.
    title,  // title:title
    author, // author:author
    genre, // genre:genre
  }

  nextId++;
  books.push(newBook)
  res.status(201).json(newBook)
 })
 

app.listen(8080, () => console.log("Server running on port 8080"));










//note:
// // //import {random} from "......." // esmodules
// // //console.log(random())
// const express from 'express'
// console.log(express)

// app.get('/',(req,res) =>{
//   //1. send back with text
//   //res.send('it is working!')
//   // this is not front end and this is not HTML
//   //we need to use the link with / at the end to get the 
//   //real request worked. such as : localhost:3000/
  
//   //2. send back with js
//   // res.json({
//   //   message:"this is working in with js"
//   // })



// })


// app.get('/:ag',(req,res)) =>{
//   res.json({
//     singleSnack:'apple'
//   })
// }

// // localhost:

//   //3. send back with snacks values
// app.get('/',(req,res) =>{
//   const snacks = ['apple','pear','cookies']

//   res.json({
//     snacks
//   })
// }

// // 4.// allow us use the data pass in the js
// app.use(express.json()) 
// app.get('/',(req,res) =>{
//   const data = req.body
//   console.log(data)
// }

// // (URL)Uniform Resource Identifier

// app.listen(3000, ()=> {
//   console.log('the server is running....')
// })


// constant express= require('express')

// //is if the is is the name, then we nee to use .name
// const id = Number(req.params.id)


// // end the server:
// // npm install nodemon -D
// // npm install --help

// //first the way to run the code: -dev
// // npm run ag

// //second the way to run the code: -file
// //node app.js
