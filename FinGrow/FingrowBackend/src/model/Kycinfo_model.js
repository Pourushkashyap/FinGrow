import mongoose from "mongoose";

const kycschema = mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        index:true
    },
    lastname:{
        type:String,
        lowercase:true,
        trim:true,
        index:true,
        required:false
    },
    address:{
        street:{type:String,required:true},
        city:{type:String,required:true},
        state:{type:String,required:true},
        country:{type:String,required:true},
        postalCode:{type:String,required:true}
    },
    monthlyIncome:{
        type:Number,
        required:true,
        min:0,   
    },
    panid:{
        type:String,
        required:true,
        uppercase:true,
        trim:true,
        unique:true,
        validate: {
            validator: function(v) {
                return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v);
            },
            message: "Invalid PAN format"
        }
    },
    aadhaarid:{
        type:Number,
        required:true,
        unique: true,
        validate: {
            validator: v => /^\d{12}$/.test(v.toString()),
            message: "Aadhaar ID must be a 12-digit number"
        }
    },
    accountno:{
        type:Number,
        required:true,
        unique:true

    },
    IFSCcode:{
        type:String,
        required:true,
        trim:true,
        validate: {
            validator: function(v) {
                return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(v);
            },
            message: "Invalid IFSC code format"
        }
    },
    bankname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    phone:{
        type:String,
        required:true,
        validate: {
            validator: v => /^\d{10}$/.test(v),
            message: "Phone must be a 10-digit number"
        }
    },
    kycStatus: {
        type: String,
        enum: ["Pending", "Verified", "Rejected"],
        default: "Pending"
    }

},{timestamps:true});

export const Kycinfo = mongoose.model("Kycinfo",kycschema)
