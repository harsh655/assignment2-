import React from "react";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <div className="section">
      <div className="card_styles">
        <Card.Title>Harsh Raval</Card.Title> <br />
        <Card.Text>
          <h5>Developer & Traveler</h5>
        </Card.Text>
        <Card.Text>Hi! Welcome to my Profile</Card.Text>
      </div>

      <div class="About">
        <text>
          <h2>Education </h2> <hr></hr>
          Bachlore's of Computer Application:- (2016-2019)
          <p>I have Completed my BCA From Gujarat University In mar-2019.</p>
          <hr></hr>
        </text>
        <text>
          <h2>Skum School (2014-2016)</h2>
          <hr></hr>
          <p>I Have Completed My High School In Commerce Stream.</p>
        </text>
        <text>
          <h2>Work Experience</h2>
          <hr></hr>
          Internship From (2020-2021)
          <p>
            I did my Internship in Santram Auto as Data Handling I had to manage
            all the data of vehicle and their parts and when is the service due
            and also the insurance details.
          </p>
        </text>
      </div>
    </div>
  );
};

export default About;
