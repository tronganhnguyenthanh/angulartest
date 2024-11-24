const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const mongoose = require("mongoose")
const multer  = require('multer')
const upload = multer({dest:'uploads/'})
const routerAPI = require("./routes/routes.api")
mongoose.connect(process.env.DB).then(() => {console.log("Database connect successfully")}).catch(() => {
 console.log("Failed to connect")
})
app.listen(process.env.PORT, () => {
 console.log(`Server is running on port ${process.env.PORT}`)
})
app.use(express.json())
app.use(cors())
app.use("/api", routerAPI)
app.post("/file/import", upload.single("file"), function(req, res){
  try{
    let file = req.file
    res.status(200).json(file)
  }catch(error){
    res.status(400).json({message:error})
  }
})