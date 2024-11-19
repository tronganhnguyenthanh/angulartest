const mongoose = require("mongoose")
const signUpSchema = mongoose.Schema({
 username:{
  type:String
 },
 password:{
  type:String
 }   
},{
 collection:"sign_up"
})
module.exports = mongoose.model("signUpSchema", signUpSchema)