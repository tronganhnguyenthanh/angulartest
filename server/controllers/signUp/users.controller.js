const userSignUpModel = require("../../models/signUp/users.model")
const signUp = async (req, res) => {
  try{
    let users = new userSignUpModel({
     username:req.body.username,
     password:req.body.password
    })
    await users.save()
    res.status(200).json({message:"User created successfully"})
  }catch(error){
    res.status(400).json({message:error})
  }
}
module.exports = {signUp}