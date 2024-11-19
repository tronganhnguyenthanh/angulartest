const userLoginModel = require("../../models/logIn/users.model")
const jwt = require("jsonwebtoken")
const Login = async (req, res) => {
  try{
    let users = new userLoginModel({
     username:req.body.username,
     password:req.body.password
    })
    await users.save()
    let decodeUser = await jwt.sign({users}, "I am doing a technical test", {
      expiresIn:"24d"
    })
    res.status(200).json({token:decodeUser})
  }catch(error){
    res.status(400).json({message:error})
  }
}
module.exports = {Login}