const fetchImportFile = async (req, res) => {
  try{
   res?.status(200)?.json({message:"File imported successfully"}) 
 }catch (error){
   res?.status(400)?.json({message:"Failed to import file"})
 }
}
module.exports = fetchImportFile