const mongoose = require("mongoose")
const loginSchema = mongoose.Schema({
  username:{
   type:String
  },
  password:{
   type:String
  }
 },{
  collection:"login"
 })
 module.exports = mongoose.model("loginSchema", loginSchema)