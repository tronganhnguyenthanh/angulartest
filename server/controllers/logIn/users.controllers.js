const userLoginModel = require("../../models/logIn/users.model")
const Login = async (req, res) => {
  try{
    let users = new userLoginModel({
     username:req.body.username,
     password:req.body.password
    })
    await users.save()
    res.status(200).json({message:"User login successfully"})
  }catch(error){
    res.status(400).json({message:error})
  }
}
module.exports = {Login}