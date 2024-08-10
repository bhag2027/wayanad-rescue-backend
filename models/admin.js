const mongoose=require("mongoose")
const loginSchema=mongoose.Schema(
    {
        username:String,
        password:String
    }
)

let model=loginModel=mongoose.model("logindatas",loginSchema)
module.exports=loginModel