const userSignUpModel = require("../../models/signUp/users.model")
const jwt = require("jsonwebtoken")
const signUp = async (req, res) => {
  try{
    let users = new userSignUpModel({
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
module.exports = {signUp}