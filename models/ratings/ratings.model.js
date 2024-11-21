const mongoose = require("mongoose")
const pokemonRatings = mongoose.Schema({
  isMarked:{
   type:Boolean
  },
},{
 collection:"ratings"
})
module.exports = mongoose.model("pokemonRatings", pokemonRatings)