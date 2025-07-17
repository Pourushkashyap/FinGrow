import React, { useEffect, useRef } from "react";
import { Newspaper } from "lucide-react";

const link = [
  {
    line1: "AisaTechDaily",
    line2: "Only around 3% of the Indian population actively invests in the stock market",
  },
  {
    line1: "AisaTechDaily",
    line2: "A survey revealed that 75% of Indians do not have an emergency fund",
  },
  {
    line1: "AisaTechDaily",
    line2: "69% of Indian households struggle with financial insecurity and lack sufficient savings.",
  },
  {
    line1: "AisaTechDaily",
    line2: "Less than 20% of working Indians invest in financial assets like mutual funds or stocks",
  },
  {
    line1: "AisaTechDaily",
    line2: "Only about 2% of Indian investors engage in the stock market",
  },
  {
    line1: "AisaTechDaily",
    line2: "Data indicates that over 95% of Indian traders incur losses in the stock market",
  },
  {
    line1: "AisaTechDaily",
    line2: "58% of Indians using instant loan apps in the last two years faced annual interest rates over 25%.",
  },
  {
    line1: "AisaTechDaily",
    line2: "RBI is concerned about the rapid rise in unsecured lending for consumption.",
  },
  {
    line1: "AisaTechDaily",
    line2: "Thousands of Indian investors lost nearly $100 million in Falcon Invoice Discounting's Ponzi scheme.",
  },
  {
    line1: "AisaTechDaily",
    line2: "SEBI is tackling finance influencers giving misleading investment advice on social media.",
  },
  {
    line1: "AisaTechDaily",
    line2: "Indian banks face rising defaults from over-leveraged retail borrowers, affecting top lenders.",
  },
];

function News() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 2; // Adjust speed
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 2; // Adjust scroll step
        }
      }
    };

    const interval = setInterval(scroll, 50); // Adjust speed (lower = faster)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-[#ffffe6]">
      <div className="mb-8 font-bold text-3xl text-yellow-500">FinGrow in News</div>

      {/* Scrollable Wrapper */}
      <div
        ref={scrollRef}
        className="w-[80vw] flex items-center pt-4 overflow-x-auto scrollbar-hide relative pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-6 w-max px-4">
          {link.concat(link).map((item, index) => ( // Duplicating cards for infinite scroll effect
            <div
              key={index}
              className="border border-gray-300 bg-white w-64 h-36 p-4 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Newspaper className="text-green-600 w-6 h-6" />
                <p className="bg-green-600 text-white px-3 rounded-full text-xs font-semibold">
                  {item.line1}
                </p>
              </div>
              <p className="text-[14px] text-gray-600">{item.line2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
