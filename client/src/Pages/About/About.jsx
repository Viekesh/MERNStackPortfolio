import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="profile_img">
            {/* <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Profile_Picture"
            /> */}
          </div>
          <div className="content">
            <h3>
              <span className="child_1">Hey there!</span>
            </h3>
            <h3>Thanks for reaching out and taking the time to read this.</h3>
            <h3>
              My name is Vikesh Gaikwad, and I'm a{" "}
              <span className="profession">Full Stack Engineer</span> by trade
              and an <span className="profession">Electrical Engineer</span> by
              education. I've been coding for about 3 years now, and I've
              developed a wide range of websites and applications.
            </h3>
            <h3>
              I didn't learn to code in college. In fact, I didn't even know I
              wanted to be a developer until the pandemic hit. But when I found
              myself with a lot of free time, I decided to teach myself how to
              code.
            </h3>
            <h3>
              I started with the basics, like HTML and CSS. Then I moved on to
              JavaScript, NodeJs and Python. Once I had a good foundation in
              those languages, I started building my own projects. I've built
              websites for businesses, nonprofits, and even individuals. I've
              also built applications that help people with their daily tasks.
            </h3>
            <h3>
              I'm still learning, but I'm confident in my skills. I'm always
              looking for new challenges, and I'm eager to work with
              professionals who can help me grow as a developer.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
