import React, { useState } from "react";
import "./Layout.css";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import LandingPage from "../../Pages/LandingPage/LandingPage";
import Menu from "../Menu/Menu";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <Menu />
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={18} />
              ) : (
                <AiOutlineDoubleRight />
              )}
            </p>
          </div>
        </div>
        <div className="container">
          <LandingPage />
        </div>
      </div>
    </>
  );
};

export default Layout;
