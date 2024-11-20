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
   let limit = req.query.limit || 20
   let name = req.query.name || ""
   let query = name ? {name:{$regex:name, $options:"i"}}:{}
   let listPokemon = await pokemonModel.find(query).limit(limit)
   res?.status(200)?.json(listPokemon)   
 }catch(error){
   res?.status(400)?.json({message:error}) 
 }
}
const viewPokemonDetailById = async (req, res) => {
  try{
    let id = req.params.id
    let detailPokemon = await pokemonModel.findById(id)
    res.status(200).json(detailPokemon)
  }catch(error){
    res?.status(400)?.json({message:error})
  }
}
module.exports = {
 addPokemon,
 getPokemonList,
 viewPokemonDetailById
}