import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="photo.png" alt="Majid Khan Mohmand" />;
}

function Intro() {
  return (
    <div>
      <h1>Majid Khan Mohmand</h1>
      <p>
        Senior Full Stack Web Developer and Cloud Native Tech Stacks enthusiast.
        Majid loves to code, travel, write and take photos. He also loves to
        cook and do blogging.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" color="lightblue" />
      <Skill skill="NodeJs" color="red" />
      <Skill skill="Html/Css" color="yellow" />
      <Skill skill="Javascript" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
