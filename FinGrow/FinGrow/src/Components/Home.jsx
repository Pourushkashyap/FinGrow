import React, { useState } from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import Carousel from "./Carousel.jsx";
import Faq from "../Utils/Faq.jsx";
import News from "./News.jsx";
import Chatbot from "./ChatBot.jsx";
import GeneralCalculator from "./General-Calculator.jsx";
import FinancialSuccess from "./FinancialSuccess.jsx";
import MouseFollower from "./MouseFollower.jsx";
import Profile from "./Profile.jsx";

function Home({ userData = { name: "User", email: "user@example.com" } }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <>
      <MouseFollower />
      <div className="">
        <Header toggleProfile={toggleProfile} isProfileOpen={isProfileOpen} />
        <Body />
        <Carousel />
        <GeneralCalculator />
        <FinancialSuccess />
        <News />
        <Faq />
        <Chatbot />
        
      </div>
      <Profile
        isProfileOpen={isProfileOpen}
        toggleProfile={toggleProfile}
        name={userData.name}
        email={userData.email}
      />
    </>
  );
}

export default Home;