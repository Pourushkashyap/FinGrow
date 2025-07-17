import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming users are authenticated and stored
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  totalRepayment: {
    type: Number,
    required: true
  },
  interestRate: {
    type: String,
    required: true
  },
  repaymentDate: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Loan = mongoose.model('Loan', loanSchema);
export default Loan;
