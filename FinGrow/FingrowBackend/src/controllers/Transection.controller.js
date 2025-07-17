import {asynchandler} from "../utils/Asynchandler.js"
import {Apierror} from '../utils/Apierror.js'
import {Apiresponse} from "../utils/Apiresponse.js"
import { LoanOffer } from "../model/loan_offer.js";
import { User } from "../model/User.js";
import { Transaction  } from "../model/Transaction_model..js";

// Transaction Controller
const transactionController = {
  // Create a new transaction (e.g., when a loan offer is accepted)
  createTransaction: asynchandler(async (req, res) => {
    const { offerId, amount, interestRate, repaymentDate } = req.body;
    const borrowerId = req.user.userId;

    // Validate loan offer
    const loanOffer = await LoanOffer.findById(offerId);
    if (!loanOffer || loanOffer.status !== "offered") {
      throw new Apierror(400, "Invalid or unavailable loan offer");
    }

    // Ensure borrower is not the lender
    if (loanOffer.lender.toString() === borrowerId) {
      throw new Apierror(400, "Cannot borrow your own loan offer");
    }

    // Create transaction
    const transaction = new Transaction({
      lenderId: loanOffer.lender,
      borrowerId,
      type: "received",
      amount,
      interestRate,
      repaymentDate,
      relatedOffer: offerId,
      status: "pending",
    });

    await transaction.save();

    // Update user references
    await User.findByIdAndUpdate(loanOffer.lender, {
      $push: { loansGiven: transaction._id },
    });
    await User.findByIdAndUpdate(borrowerId, {
      $push: { loansTaken: transaction._id },
    });

    // Update loan offer status
    loanOffer.status = "accepted";
    await loanOffer.save();

    return res
      .status(201)
      .json(
        new Apiresponse(
          201,
          { transaction },
          "Transaction created successfully"
        )
      );
  }),

  // Get all transactions for a user (both given and taken)
  getUserTransactions: asynchandler(async (req, res) => {
    const userId = req.user.userId;

    const transactions = await Transaction.find({
      $or: [{ lenderId: userId }, { borrowerId: userId }],
    })
      .populate("lenderId", "username profile.name")
      .populate("borrowerId", "username profile.name")
      .populate("relatedOffer", "amount interestRate");

    return res
      .status(200)
      .json(
        new Apiresponse(
          200,
          { transactions },
          "User transactions fetched successfully"
        )
      );
  }),

  // Get a specific transaction by ID
  getTransactionById: asynchandler(async (req, res) => {
    const { transactionId } = req.params;
    const userId = req.user.userId;

    const transaction = await Transaction.findById(transactionId)
      .populate("lenderId", "username profile.name")
      .populate("borrowerId", "username profile.name")
      .populate("relatedOffer", "amount interestRate");

    if (!transaction) {
      throw new Apierror(404, "Transaction not found");
    }

    // Ensure user is either lender or borrower
    if (
      transaction.lenderId._id.toString() !== userId &&
      transaction.borrowerId._id.toString() !== userId
    ) {
      throw new Apierror(403, "Unauthorized access to transaction");
    }

    return res
      .status(200)
      .json(
        new Apiresponse(
          200,
          { transaction },
          "Transaction fetched successfully"
        )
      );
  }),

  // Update transaction status (e.g., mark as completed or defaulted)
  updateTransactionStatus: asynchandler(async (req, res) => {
    const { transactionId, status } = req.body;
    const userId = req.user.userId;

    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      throw new Apierror(404, "Transaction not found");
    }

    // Only lender can update certain statuses (e.g., completed, defaulted)
    if (
      ["completed", "defaulted"].includes(status) &&
      transaction.lenderId.toString() !== userId
    ) {
      throw new Apierror(403, "Only lender can update this status");
    }

    transaction.status = status;
    if (status === "completed" || status === "defaulted") {
      transaction.remainingBalance = 0;
    }

    await transaction.save();

    return res
      .status(200)
      .json(
        new Apiresponse(
          200,
          { transaction },
          "Transaction status updated successfully"
        )
      );
  }),

  // Record a repayment (partial or full)
  recordRepayment: asynchandler(async (req, res) => {
    const { transactionId, repaymentAmount } = req.body;
    const userId = req.user.userId;

    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      throw new Apierror(404, "Transaction not found");
    }

    // Only borrower can make repayments
    if (transaction.borrowerId.toString() !== userId) {
      throw new Apierror(403, "Only borrower can make repayments");
    }

    if (transaction.status !== "pending") {
      throw new ApiError(400, "Transaction is not pending");
    }

    transaction.amount -= repaymentAmount;
    if (transaction.amount <= 0) {
      transaction.status = "completed";
      transaction.amount = 0;
    }

    await transaction.save();

    return res
      .status(200)
      .json(new ApiResponse(200, { transaction }, "Repayment recorded successfully"));
  }),
};

export { transactionController};