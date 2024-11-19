const mongoose = require("mongoose")
const pokemonSchema = mongoose.Schema({
  image:{
   type:String
  },
  name:{
   type:String
  }
},{
 collection:"pokemon"
})
module.exports = mongoose.model("pokemonSchema", pokemonSchema)