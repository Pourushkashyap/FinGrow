import mongoose,{Schema} from "mongoose"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userschema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true,
        index:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    refreshtoken:{
        type:String
    }
},{timestamps:true})

userschema.pre("save",async function(next){
    if(!this.isModified("password")) return next;

    this.password =await bcrypt.hash(this.password,10)
    next()
})

userschema.methods.ispasswordcorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userschema.methods.generateaccesstoken = function(){
    return jwt.sign(
        {
            _id:this.id,
            email : this.email,
            username:this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRE 
        }
    )
}

userschema.methods.generaterefershtoken =  function(){
    return jwt.sign({
        id:this._id,
    },
   process.env.REFRESH_TOKEN_SECRET,
   {
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY
   }
)
}
export const User = mongoose.model("User",userschema);