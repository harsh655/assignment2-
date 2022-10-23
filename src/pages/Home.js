import "../styles/style.css";
import logo1 from "../Images/logo1.jpg";
import logo2 from "../Images/logo2.jpg";
import React from "react";
import { Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="Project_Details">
      <div class="card">
        <h2>My 1st Project</h2>
        <Image id="image" src={logo1} width="250" height="300" />
        <h2>My 2nd Project</h2>
        <Image id="image" src={logo2} width="250" height="300" />
        <p>
          {" "}
          Above is the Pictures of my project that I have made in last Semester
        </p>
      </div>
    </div>
  );
};

export default Home;
