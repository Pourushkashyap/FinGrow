import { register, login, logout } from '../controllers/login.controller.js';
import { Router } from 'express';
import { verifyjwt } from '../middleware/auth.middleware.js';
import {newKyc} from '../controllers/Kycdata.js'
import {kycstatus} from '../controllers/Kycdata.js'
import { createoffer,getOffersByAmount } from '../controllers/offer.controller.js';
import { addLoan,getTotalLoanAmount } from '../controllers/loan2.controller.js';
import { transactionController } from '../controllers/Transection.controller.js';
const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', verifyjwt, logout);
router.post('/kyc',newKyc);
router.post('/Kycstatus',kycstatus)
router.post('/createoffer',createoffer)
router.get('/offers', getOffersByAmount);
router.post('/addLoan', verifyjwt, addLoan);
router.get('/totalLoan', verifyjwt, getTotalLoanAmount);


router.post('/transactions/create', verifyjwt, transactionController.createTransaction);
router.get('/transactions/user', verifyjwt, transactionController.getUserTransactions);
router.get('/transactions/:transactionId', verifyjwt, transactionController.getTransactionById);
router.patch('/transactions/status', verifyjwt, transactionController.updateTransactionStatus);
router.patch('/transactions/repay', verifyjwt, transactionController.recordRepayment);
export default router;

// john.doe@example.com