import React from "react";
import "./LandingPage.css";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  return (
    <>
      <div className="container_fluid home_container">
        <div className="home_content">
          <h1>Hi, I'm a</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Hello", "World"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
