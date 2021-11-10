import React from "react";
import { Jumbotron } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { render } from "@testing-library/react";
import { Form } from "react-bootstrap";

export default function NewSignUp() {
  // const LoginPage = (props) => {
  const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [backgroundColor, setBackgroundColor] = useState("");
  // const [color, setColor] = useState("");
  // const history = useHistory();

  // console.log("this is my loginpage", LoginPage);
  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(
      "hey im submittingggg",
      title
      // description,
      // backgroundColor,
      // color
    );
    console.log("i am th onformsubmit", onFormSubmit);

    // time to do the login from here:
    // try {
    //   const response = await axios.post("http://localhost:4000/auth/login", {
    //     title,
    //     description: description,
    //     backgroundColor: backgroundColor,
    //     color: color,
    //   });
    // setToken(response.data.token); // was saving it,
    // no longer here.
    // props.saveToken(response.data.token);
    // history.push("/");
    //   } catch (e) {
    //     console.log(e.message);
    //   }
  };

  return (
    <Jumbotron>
      <div> This Is The New Sign Up</div>
      <Form>
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
      </Form>
      <div>
        <button>SUBMIT</button>
      </div>
    </Jumbotron>
  );
}
