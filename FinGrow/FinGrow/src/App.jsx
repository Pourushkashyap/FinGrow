import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'

import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Profile from './Components/Profile.jsx'
function App() {

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="font-poppins ">  {/* Apply font globally */}
      {/* <Header /> */}
      {/* Header is always visible */}
      <Header toggleProfile={toggleProfile} isProfileOpen={isProfileOpen} />

      {/* Profile sidebar is always rendered but toggled via state */}
      <Profile toggleProfile={toggleProfile} isProfileOpen={isProfileOpen} />

      {/* Render child routes */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
