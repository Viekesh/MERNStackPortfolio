import React from "react";
import "./Menu.css";
import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { AiFillProject } from "react-icons/ai";
import { PiShareNetworkFill } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { GoCodeReview } from "react-icons/go";
// import profile_pic from "../../Images/profile_pic.webp";

const Menu = ({ toggle }) => {
  return (
    <>
      {/* {toggle && (
        <div className="navbar-profile-pic">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            // src={profile_pic}
            alt="profile pic"
          />
        </div>
      )} */}

      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              // src={profile_pic}
              alt="profile pic"
            />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">{<AiFillHome title="Home" />} Home</div>
            </div>

            <div className="nav-item">
              <div className="nav-link">{<FcAbout title="About" />} About</div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                {<AiFillProject title="Projects" />}
                Projects
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                {<PiShareNetworkFill title="Tech Stack" />}
                Tech Stack
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                {<BsWhatsapp title="Connect" />} Connect
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                {<GoCodeReview title="Testinomial" />}
                Testinomial
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">{<AiFillHome title="Home" />}</div>
          </div>

          <div className="nav-item">
            <div className="nav-link">{<FcAbout title="About" />}</div>
          </div>

          <div className="nav-item">
            <div className="nav-link">{<AiFillProject title="Projects" />}</div>
          </div>

          <div className="nav-item">
            <div className="nav-link">
              {<PiShareNetworkFill title="Tech Stack" />}
            </div>
          </div>

          <div className="nav-item">
            <div className="nav-link">{<BsWhatsapp title="Connect" />}</div>
          </div>

          <div className="nav-item">
            <div className="nav-link">
              {<GoCodeReview title="Testinomial" />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
