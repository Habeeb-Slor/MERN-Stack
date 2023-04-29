const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
  firstname : {type:String, required:true},
  password : {type:String, required:true}
})

let userModel = mongoose.model("user_tb",userSchema);

module.exports = userModel