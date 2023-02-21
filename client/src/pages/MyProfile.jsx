import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/navBar";
import Profile from "../components/perfil/Profile";

const MyProfile = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <NavBar />
        <Profile />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MyProfile;
