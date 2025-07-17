import Loan from '../model/loanmodel.js'

// Add Loan
export const addLoan = async (req, res) => {
  try {
    const { amount, totalRepayment, interestRate, repaymentDate } = req.body;
    const userId = req.user._id; // assuming user info is attached after auth middleware

    const newLoan = await Loan.create({
      userId,
      amount,
      totalRepayment,
      interestRate,
      repaymentDate
    });

    res.status(201).json({
      success: true,
      message: "Loan added successfully",
      loan: newLoan
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Total Loan Amount
export const getTotalLoanAmount = async (req, res) => {
  try {
    const userId = req.user._id;

    const loans = await Loan.find({ userId });

    const totalLoanTaken = loans.reduce((acc, loan) => acc + loan.amount, 0);

    res.status(200).json({
      success: true,
      totalLoanTaken,
      numberOfLoans: loans.length,
      loans
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
