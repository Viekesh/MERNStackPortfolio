import React from "react";
import "./Menu.css";
import profile_pic from "../../Images/profile_pic.webp";

const Menu = () => {
  return (
    <>
      <div className="navbar-profile-pic">
        <img
          // src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          src={profile_pic}
          alt="profile pic"
        />
      </div>
    </>
  );
};

export default Menu;
