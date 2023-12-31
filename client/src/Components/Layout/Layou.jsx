// import React, { useState } from "react";
// import "./Layout.css";
// import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
// import LandingPage from "../../Pages/LandingPage/LandingPage";
// import Menu from "../Menu/Menu";
// import About from "../../Pages/About/About";
// import TechStack from "../../Pages/TechStack/TechStack";
// import Projects from "../../Pages/Projects/Projects";

// const Layout = () => {
//   const [toggle, setToggle] = useState(true);

//   // change toggle
//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <>
//       <div className="sidebar-section">
//         <div className={toggle ? "sidebar-toggle" : "sidebar"}>
//           <div className="sidebar-toggle-icons">
//             <p onClick={handleToggle}>
//               {toggle ? (
//                 <AiOutlineDoubleLeft size={18} />
//               ) : (
//                 <AiOutlineDoubleRight />
//               )}
//             </p>
//           </div>
//           <Menu toggle={toggle} />
//         </div>
//         <div className="container">
//           <LandingPage />
//           <About />
//           <TechStack />
//           <Projects />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;
