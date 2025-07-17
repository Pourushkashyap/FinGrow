import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel() {
  const scrollRef = useRef(null);

  // const scroll = (direction) => {
  //   if (scrollRef.current) {
  //     const { current } = scrollRef;
  //     current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
  //   }
  // };

  const links = [
    {
      src:"https://cdn-icons-png.flaticon.com/512/4466/4466510.png",
      line1:"Instant Approval & Disbursal",
      line2:"Get instant loan approvals and quick disbursal directly into your bank account. No long paperwork, just a seamless experience!"
    },
    {
      src:"https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      line1:" We are Bharat Ka Money App - Your All in One Financial Super App",
      line2:" We’re your one-stop Super App for credit, insurance, and investments."
    },
    {
      src:"https://cdn-icons-png.flaticon.com/512/9512/9512854.png",
      line1:"User-friendly Interface",
      line2 : "Our easy-to-use app ensures a smooth experience for beginners and experts alike, making financial management effortless."
    },

  ]

  return (
    <div className="flex mt-16  flex-col items-center justify-center  ">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-10 mt-10 text-center">
        <span className="border-b-2 border-yellow-400">Join the millions</span> who have said <span className="text-yellow-500">"YES"</span> to FinGrow
      </h2>

      {/* Carousel Container */}
      <div className="relative  md:w-2/3 md:text-left space-y-4 h-96">
        {/* Scrollable Cards (Hidden Scrollbar) */}
        <div
          ref={scrollRef}
          className="flex   pb-5 space-x-4 overflow-x-scroll no-scrollbar scroll-smooth px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar for Firefox & IE
        >
           
          {links.map((link,index) =>
          (
            <div key={index} className="flex flex-col  hover:scale-105 hover:translate-y-2 transition-all duration-300 items-center border border-gray-200 bg-white shadow-lg rounded-xl p-6 md:w-1/3 my-7"
            >
            <img src={link.src} alt="Financial App" className="w-16 h-16 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">
             {link.line1}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
             {link.line2}
            </p>
          </div>
          )
          )}

        </div>

        {/* Navigation Arrows */}
        {/* <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          <FaArrowLeft className="text-gray-600" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          <FaArrowRight className="text-gray-600" />
        </button> */}
      </div>
    </div>
  );
}

export default Carousel
