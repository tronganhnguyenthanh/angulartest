const fetchImportFile = async (req, res) => {
  try{
   res?.status(200).json({message:"File imported"}) 
 }catch (error){
   res?.status(400).json({message:"Fail to import file"})
 }
}
module.exports = fetchImportFile