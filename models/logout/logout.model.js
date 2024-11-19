const mongoose = require("mongoose")
const logoutSchema = mongoose.Schema({
  isLoggedOut:{
   type:Boolean
  }
 },{
  collection:"logout"
 })
 module.exports = mongoose.model("logoutSchema", logoutSchema)