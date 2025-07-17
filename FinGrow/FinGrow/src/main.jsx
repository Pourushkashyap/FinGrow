import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Suggestion from './Components/Suggestion.jsx'
import Signup from './Components/Signup.jsx'
import Loan from './Components/Loan.jsx'
import Home from './Components/Home.jsx'
import Trends from './Components/Trends.jsx'
import GetLoan from './Components/GetLoan.jsx'
import ProvideLoan from './Components/ProvideLoan.jsx'
import LoanForm from './Components/Loan-summary.jsx'
import Aadhar from './Components/Aadhar.jsx'
import UserForm from './Components/BasicKYC.jsx'
import BankDetails from './Components/BankKYC.jsx'
import KnowMore from './Components/Knowmore.jsx'
import MentorCard from './Components/MentorCard.jsx'
import FinancialFreedom from './Components/FinancialFreedom.jsx'
import Profile from './Components/Profile.jsx'
import GeneralCalculator from './Components/General-Calculator.jsx'
import GoalSavingPlanner from './Utils/GoalSavingPlanner.jsx'
import LoanConfirmation from './Components/LoanConfirmation.jsx'
import WalletConnect from './Components/WalletConnect.jsx'
// import Profile from './Components/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/suggestion',
        element: <Suggestion />
      },
      {
        path: '/KnowMore/Signup',
        element: <Signup />
      },
      {
        path: '/Signup',
        element: <Signup />
      },
      {
        path: '/trends',
        element: <Trends />
      },
      {
        path: '/Profile',
        element: <Profile />
      },
      {
        path: '/Loan',
        element: <Loan />,
      },
      {
        path: '/loan/get-loan',
        element: <GetLoan />
      },
      {
        path: '/loan/provide-loan',
        element: <ProvideLoan />
      },
      {
        path:"/KnowMore",
        element:<KnowMore/>
      },
      {
        path:"/MentorCard",
        element:<MentorCard/>
      },
      {
        path:"/FinancialFreedom",
        element:<FinancialFreedom/>
      },
      {
        path: '/Pan-Verify',
        element: <LoanForm />
      },
      {
        path: '/Aadhar-verify',
        element: <Aadhar/>
      },
      {
        path: '/Basic-verify',
        element: <UserForm/>
      },
      {
        path: '/Bank-verify',
        element: <BankDetails/>
      },
      {
        path: '/General-Calculator',
        element: <GeneralCalculator/>
      },
      {
        path:'/GoalSavingPlanner',
        element:<GoalSavingPlanner/>
      },
      {
        path:"/LoanConfirmation",
        element:<LoanConfirmation/>
      },
      {
        path:'/Wallet',
        element:<WalletConnect/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
