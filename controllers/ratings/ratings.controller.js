const ratingsIconModel = require("../../models/ratings/ratings.model")
const Ratings = async (req, res) => {
  try{
   const isMarked = req.body.isMarked || false
   let ratings = new ratingsIconModel({
    isMarked:isMarked
   })
   await ratings.save()
   if(req.body.isMarked){
     res?.status(200)?.json({message:"You marked this icon"})
   }else{
     res?.json({message:"You unmarked this icon"}) 
    }
    }catch(error){
      res.status(400).json({message:error})
    }
  }
  module.exports = {Ratings}