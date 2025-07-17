import { asynchandler } from "../utils/Asynchandler.js"
import { Apierror } from '../utils/Apierror.js';
import { LoanOffer } from "../model/loan_offer.js";
import {Apiresponse} from "../utils/Apiresponse.js"

const createoffer = asynchandler(async (req, res) => {
    const { name, loanAmount, interestRate } = req.body;
    if (!name || !loanAmount || !interestRate) {
        throw new Apierror(400, "All fields are required: name, loanAmount, interestRate");
    }
    const newoffer = await LoanOffer.create({
        name,
        loanAmount,
        interestRate
    });
    return res.status(200).json(new Apiresponse(200, true, "Loan offer created successfully", newoffer));
});

const getOffersByAmount = asynchandler(async (req, res) => {
    console.log("Request query:", req.query);
  
    const { maxAmount } = req.query;
  
    if (!maxAmount) {
      throw new Apierror(400, "Please provide a maximum amount parameter");
    }
  
    const amount = Number(maxAmount);
    if (isNaN(amount) || amount <= 0) {
      throw new Apierror(400, "Please provide a valid positive amount");
    }
  
    try {
      console.log(`Fetching offers with loanAmount <= ${amount}`);
      const offers = await LoanOffer.find({
        loanAmount: { $lte: amount },
      }).sort({ loanAmount: 1 });
  
      console.log("Found offers:", offers);
  
      if (!offers || offers.length === 0) {
        return res.status(200).json(
          new Apiresponse(
            200,
            [], // Data should be an empty array
            "No loan offers found within the specified amount"
          )
        );
      }
  
      return res.status(200).json(
        new Apiresponse(
          200,
          offers, // Data should be the offers array
          "Loan offers retrieved successfully"
        )
      );
    } catch (err) {
      console.error("Error fetching offers:", err.message, err.stack);
      throw new Apierror(500, "Failed to fetch loan offers from the database");
    }
  });

export { createoffer, getOffersByAmount };