// src/model/Transaction.js
import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    lenderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    borrowerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["given", "received"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    interestRate: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    relatedOffer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LoanOffer",
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    repaymentDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

transactionSchema.index({ lenderId: 1 });
transactionSchema.index({ borrowerId: 1 });
transactionSchema.index({ relatedOffer: 1 });
transactionSchema.index({ status: 1 });

transactionSchema.pre("validate", function (next) {
  if (this.lenderId.equals(this.borrowerId)) {
    next(new Error("Lender and borrower cannot be the same user"));
  } else {
    next();
  }
});

const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);
export { Transaction };