import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function NewSignUp() {
  return (
    <Jumbotron>
      <div> This Is The New Sign Up</div>
      <ul>
        <li>
          {" "}
          <labeL>TITLE:</labeL>
          <input type="" />
        </li>
        <li>
          {" "}
          <labeL>DESCRIPTION:</labeL>
          <input type="" />
        </li>
        <li>
          {" "}
          <labeL>BACK GROUND COLOR:</labeL>
          <input type="" />
        </li>
        <li>
          {" "}
          <labeL>COLOR:</labeL>
          <input type="" />
        </li>
      </ul>
      <div>
        <button>SUBMIT</button>
      </div>
    </Jumbotron>
  );
}
// title: <MyName>'s space
// description: null
// backgroundColor: #ffffff (white)
// color: #000000 (black)
