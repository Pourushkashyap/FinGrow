import { FaGooglePlay, FaApple, FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import fingrow from '../assets/img/fingrow.png'
 function Footer() {
  return (
    <footer className="bg-[#ffffe6] py-10 px-5 md:px-20 text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Download */}
        <div>
          {/* <h2 className="text-2xl font-bold text-yellow-500">FinGrow</h2> */}
          <img className="w-44 h-24" src={fingrow} alt="logo" />
          <p className="text-sm">BHARAT KA MONEY APP</p>
          <p className="mt-4">Download Now:</p>
          <div className="flex gap-2 mt-2">
            <button className="bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-lg">
              <FaGooglePlay /> Play Store
            </button>
            <button className="bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-lg">
              <FaApple /> App Store
            </button>
          </div>
        </div>
        
        {/* Personal Loan */}
        <div>
          <h3 className="font-semibold text-lg">Personal Loan</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              "Instant Personal Loan",
              "Two Wheeler Loan",
              "Travel Loan",
              "Car Loan",
              "Consumer Durable Loan",
              "Mobile Loan",
              "Medical Loan",
              "Education Loan",
              "Home Renovation Loan",
              "Marriage Loan",
            ].map((item) => (
              <li key={item} className="hover:text-yellow-500 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        
        {/* FinGrow Details */}
        <div>
          <h3 className="font-semibold text-lg">Pre-Approved FinGrow Limit</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer">FinGrow Limit</li>
            <li className="hover:text-yellow-500 cursor-pointer">FinGrow Limit on Gpay</li>
            <li className="font-bold">BNPL</li>
            <li className="hover:text-yellow-500 cursor-pointer">Flipkart Buy Now Pay Later</li>
            <li className="font-bold">Insurance</li>
            <li className="font-bold">Investment</li>
            <li className="hover:text-yellow-500 cursor-pointer">SQARL</li>
            <li className="hover:text-yellow-500 cursor-pointer">Digital Gold</li>
            <li className="hover:text-yellow-500 cursor-pointer">Electric Two Wheeler Loan</li>
          </ul>
        </div>
        
        {/* Legal and Socials */}
        <div>
          <h3 className="font-semibold text-lg">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer">Partners</li>
            <li className="hover:text-yellow-500 cursor-pointer">Policies</li>
            <li className="hover:text-yellow-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact Us</li>
          </ul>
          <p className="mt-4 font-semibold">Follow us:</p>
          <div className="flex gap-3 mt-2 text-xl">
            <FaLinkedin className="cursor-pointer hover:text-yellow-500" />
            <FaInstagram className="cursor-pointer hover:text-yellow-500" />
            <FaFacebook className="cursor-pointer hover:text-yellow-500" />
            <FaYoutube className="cursor-pointer hover:text-yellow-500" />
            <FaTwitter className="cursor-pointer hover:text-yellow-500" />
          </div>
        </div>
      </div>
      
      <div className="mt-10 text-center text-sm text-gray-500 border-t pt-5">
        Types of Personal Loan: Short Term Loan | Quick Loan App | Cash Loan App | Money Loan | Easy Loan | App Only Loans | Instant Loan App
      </div>
    </footer>
  );
}

export default Footer