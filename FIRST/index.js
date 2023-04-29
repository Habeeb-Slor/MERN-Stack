const express = require('express');
const app = express();
const ejs = require("ejs")
const mongoose = require("mongoose")
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

let URI = "mongodb+srv://Habeebullah:Habeebullah@cluster0.1z8akfi.mongodb.net/school_portal_db?retryWrites=true&w=majority"

// UNIFORM RESOURCE IDENTIFIER 
mongoose.connect(URI).then(()=>{
  console.log("Connected")
}).catch((err)=>{
  console.log("not connected")
  console.log(err);
})

let studnetSchema = mongoose.Schema({
  firstname : {type:String,required:true},
  lastname : {type:String,required:true},
  email: {type:String, unique:true, required:true},
  password: {type:String, required:true},
  creationDate : {type:Date, default:Date.now}
})

let studentModel = mongoose.model("students",studnetSchema)

let allStudents = [];
app.get("/",(req,res)=>{
  res.render("index",{

    myName:"Kunle",
    allStudents:[
      {firstname: "FrontHorse", lastname: "Sqi"},
      {firstname: "Victoria", Lastname: "sqi"},
      {firstname: "Kunle", lastname: "sade"}
    ]
  
  })
})

app.get("/signup",(req,res)=>{
  res.render("signup")
})

app.post("/register", (req,res)=>{
  res.send('Sign up Successful')
  let form = new studentModel(req.body)
  form.save().then(()=>{
    console.log("Saved Successfully")
  }).catch((err)=>{
    console.log(err)
    console.log(err.message)
    console.log("Save Unsuccessfull");
    ;
  })
  allStudents.push(req.body)
  console.log(req.body)
})
app.get("/signin",(req,res)=>{
  res.send("Hello, welcome to NODE")
})
app.get("/about",(req,res)=>{
  res.send("Hello, welcome to NODE")
})


app.listen(5000,(err)=>{
  if(err){
    console.log("something went wrong")
  }else{
    console.log("our app has started")
  }
  
})