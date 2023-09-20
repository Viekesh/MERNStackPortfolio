import React from "react";
import "./TechStack.css";
import { TechStackList } from "../../Utilities/TechStackList";

const TechStack = () => {
  return (
    <>
      <div className="container tech_stack">
        <h3>Technologies Stack</h3>
      </div>
      <div className="tech_stack_list">
        {TechStackList.map((tech) => {
          return (
            <h3>
              <span>
                <tech.icon className="tech_icon" />
              </span>
              {tech.name}
            </h3>
          );
        })}
      </div>
    </>
  );
};

export default TechStack;
