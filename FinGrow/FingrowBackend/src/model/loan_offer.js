import mongoose from "mongoose";

const loanOfferSchema = mongoose.Schema({
    name:{
     type:String,
     required:true,     
    },
    loanAmount: {
        type: Number,
        required: true,
        min: 0,
    },
    interestRate: {
        type: Number,
        required: true,
        min: 0,
    },
   
    
}, { timestamps: true });

export const LoanOffer = mongoose.model("LoanOffer", loanOfferSchema);