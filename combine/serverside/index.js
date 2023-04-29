const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors")
const userRouter = require("./routes/user.route")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 4000
const URI = process.env.MONGO_URI

mongoose.connect(URI)
.then(()=>{
  console.log("mongoose has connected");
}).catch((err)=>{
  console.log("connection unsuccessfull");
  console.log(err);
})
//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
app.use("/user",userRouter)

app.listen(PORT,()=>{
  console.log("app has started")
})