const userLogout = require("../../models/logout/logout.model")
const Logout = async (req, res) => {
  isLoggedOut = req.body.isLoggedOut || false
  try{
    let usersLoggedOut = new userLogout({
     isLoggedOut:isLoggedOut
    })
    await usersLoggedOut.save()
    if(req.body.isLoggedOut){
      res?.status(200)?.json({message:"User has been logged out"})
    }else{
      res?.json({message:"Failed to logout"}) 
    }
  }catch(error){
    res.status(400).json({message:error})
  }
}
module.exports = {Logout}