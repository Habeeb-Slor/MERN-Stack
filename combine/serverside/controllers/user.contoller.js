const userModel = require("../models/user.model")
const register = (req,res)=>{
  let form = new userModel(req.body)
  form.save()
  .then(()=>{
    console.log("data saved successfully");
    res.send({
      status:true,
      message:"request is successfull"
    })
    .catch((err)=>{
      res.send({status:false,
      message:"sign up failed"})
    })
  })
}

module.exports = {register}