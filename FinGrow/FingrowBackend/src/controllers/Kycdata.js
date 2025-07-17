import { asynchandler } from "../utils/Asynchandler.js";
import { Apierror } from "../utils/Apierror.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import { Kycinfo } from "../model/Kycinfo_model.js";

const newKyc = asynchandler(async (req,res) =>{
   const {
      firstname,
      lastname,
      address, // Expecting an object: { street, city, state, country, postalCode }
      monthlyIncome,
      panid,
      aadhaarid,
      accountno,
      IFSCcode,
      bankname,
      email,
      phone
  } = req.body;


  if (
   !firstname ||
   !address?.street || !address?.city || !address?.state || 
   !address?.country || !address?.postalCode ||
   !monthlyIncome ||
   !panid ||
   !aadhaarid ||
   !accountno ||
   !IFSCcode ||
   !bankname ||
   !email ||
   !phone
) {
   throw new Apierror(400, "All fields are required: firstname, address (street, city, state, country, postalCode), monthlyIncome, panid, aadhaarid, accountno, IFSCcode, bankname, email, phone");
}

const existingKyc = await Kycinfo.findOne({
   $or: [
       { panid },
       { aadhaarid },
       { accountno }
   ]
});

if (existingKyc) {
   throw new Apierror(409, "KYC already exists with this PAN, Aadhaar, or account number");
}

     const userinfo = await Kycinfo.create({
        firstname,
        lastname,
        address,
        monthlyIncome,
        panid,
        aadhaarid,
        accountno,
        IFSCcode,
        bankname,
        email,
        phone
     })
     if(!userinfo){
        throw new Apierror(500,"something went wrong while creating userinfo")
     }
       return res.status(201).json(
        new Apiresponse(200,userinfo,"user register successfully")
       )
})

const kycstatus = asynchandler(async(req,res) =>{
   const{phone} = req.body;
   if(!phone){
      return new Apierror(401,"user email not found, please sign in");
   }
   const existingKyc = await Kycinfo.findOne({phone});

   if(existingKyc){
      return res.status(200).json(
         new Apiresponse(200,{kycstatus:existingKyc.kycstatus})
      );
   }

   return res.status(200).json(
      new Apiresponse(200,null, "No Kyc found,please complete your KYC ")
   )
   
})

export {newKyc,kycstatus}