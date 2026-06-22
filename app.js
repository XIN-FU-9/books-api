let books = [
  { id: 1, title: "The Pragmatic Programmer", author: "David Thomas", genre: "Tech", available: true },
  { id: 2, title: "Educated", author: "Tara Westover", genre: "Memoir", available: true },
  { id: 3, title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", available: false },
  { id: 4, title: "Sapiens", author: "Yuval Noah Harari", genre: "History", available: true },
  { id: 5, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", available: true },
];

let nextId = 6; // use this for any new book you create

const express = require("express");
const app = express();

// it lets your server read JSON that's sent to it. 
// Without it, req.body will always be empty.
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("THIS IS BOOKS API 123456");
});

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
