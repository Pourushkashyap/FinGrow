import {asynchandler} from "../utils/Asynchandler.js"
import {Apierror} from '../utils/Apierror.js'
import {User} from '../model/User.js'
import {Apiresponse} from "../utils/Apiresponse.js"

   const generateaccessandrefreshtoken = async(userid) =>{
    try{
      const user = await User.findById(userid)
      const accesstoken = user.generateaccesstoken()
      const refreshtoken = user.generaterefershtoken()

      user.refreshtoken = refreshtoken

      await user.save({validateBeforeSave:false})
      return {accesstoken,refreshtoken}
    }
    catch(err){
  throw new Apierror(500,"something went wrong while generating refresh and access token")
    }
   }




const register = asynchandler(async(req,res) =>{
    const {username,email,password} = req.body

    if (!username || !email || !password) {
        throw new Apierror(400, "All fields are required");
    }


  const existuser = await User.findOne({
    $or : [{username},{email}]
  })
  if(existuser){
    throw new Apierror(409,"user with username or email already exist")

  }
  const user = await User.create({
    username,
    email,
    password
  })

  const createduser = await User.findById(user.id).select("password")
  if(!createduser){
    throw new Apierror(500,"something went wrong while making a user")
  }
  return res.status(201).json(
    new Apiresponse(200,createduser,"user registered successfully")
  )
})


const login = asynchandler(async(req,res) =>{
    const {email,password} = req.body
    if(!( email && password)){
        throw new Apierror(400, "username or email or password is required")
    } 
   
    const user = await User.findOne({
        $or: [{email}]
    })
  
    if(!user){
        throw new Apierror(404,"user does not valid")
    }

    const ispasswordvalid = user.ispasswordcorrect(password)

    if(!ispasswordvalid){
        throw new Apierror(401,"Invalid user credential")
    }

    const {accesstoken,refreshtoken} =await generateaccessandrefreshtoken(user._id)

    const loginuser = await User.findById(user._id).select(
        "-password -refreshtoken"
    )
    const options = {
        httpOnly:true,
        secure:true,
    }

    return res.status(200)
    .cookie("accesstoken",accesstoken,options)
    .cookie("refreshtoken",refreshtoken,options)
    .json(
        new Apiresponse(200,{
            user:loginuser,accesstoken,refreshtoken
        },
    "user logged in successfully")
    )

})

const logout = asynchandler(async(req,res) =>{
    await User.findByIdAndUpdate(req.user._id,
        {
            $set:{
                refreshtoken:1
            }
        }
    )
    const options = {
        httpOnly:true,
        secure:true,
    }

    return res.status(200)
    .clearCookie("accesstoken",options)
    .clearCookie("refreshtoken",options)
    .json(
        new Apiresponse(200,{},"user logges out")
    )
})

export {register,login,logout}
