const userLogout = require("../../models/logout/logout.model")
const Logout = async (req, res) => {
  try{
    let usersLoggedOut = new userLogout({
     isLoggedOut:true
    })
    await usersLoggedOut.save()
    res?.status(200).json({message:"User has been logged out"})
  }catch(error){
    res.status(400).json({message:error})
  }
}
module.exports = {Logout}