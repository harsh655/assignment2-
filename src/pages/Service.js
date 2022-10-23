import React from "react";
import { Alert } from "react-bootstrap";

const Services = ({ props }) => {
  const [Name, onNameChange] = React.useState("");
  const [Email, onEmailChange] = React.useState("");
  const [Subject, onSubjectChange] = React.useState("");
  const [Message, onMessageChange] = React.useState("");
  function submission() {
    Alert("Your request is submitted");
  }
  return (
    <text>
      <h1>Contact Details :</h1>
      Kindly contact me if you need any help. We will give you variety of
      services.
      <hr></hr>
      <h1>Address</h1>
      17,Orok Lane, Barrie, Ontario, L4M 6H4
      <hr></hr>
      <h1>Phone</h1>
      +1 437 981 6423
      <hr></hr>
      <h1>E-mail</h1>
      Harshraval655@gmail.com
    </text>
  );
};

export default Services;
