const pokemonModel = require("../../models/pokemon/pokemon.model")
const addPokemon = async (req, res) => {
  try{
    let savePokemon = new pokemonModel({
      image:req.body.image,
      name:req.body.name
    })
    await savePokemon.save()
    res.status(200).json(savePokemon)
  }catch (error){
    res.status(400).json({message:error})
  }
}
const getPokemonList = async (req, res) => {
 try{
   let listPokemon = await pokemonModel.find()
   res?.status(200)?.json(listPokemon)   
 }catch(error){
   res?.status(400)?.json({message:error}) 
 }
}
module.exports = {
 addPokemon,
 getPokemonList
}