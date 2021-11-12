import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserSpace } from "../store/space/selectors";
import { createNewStory } from "../store/user/actions";
import { Form } from "react-bootstrap";
import { useState } from "react";

export default function FormEditMySpace() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundColor, setBackGroundColor] = useState("");
  const [color, setColor] = useState("");
  const [formHidden, setFormHidden] = useState(false);

  const createStory = useSelector(selectUserSpace);
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = createStory.length + 1;
    dispatch(createNewStory({ title, description, backgroundColor, id }));
  };
  //   title, description backgroundColor and color
  return (
    <div>
      <button onClick={() => setFormHidden(!formHidden)}>hide form</button>
      {!formHidden ? (
        <div>
          <Form>
            <ul>
              <li>
                {" "}
                <labeL>TITLE:</labeL>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </li>
              <li>
                {" "}
                <labeL>DESCRIPTION:</labeL>
                <input
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </li>
              <li>
                {" "}
                <labeL>BACK GROUND COLOR:</labeL>
                <input
                  value={backgroundColor}
                  onChange={(event) => setBackGroundColor(event.target.value)}
                />
              </li>
              <li>
                {" "}
                <labeL>COLOR:</labeL>
                <input
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                />
              </li>
              <li>
                {" "}
                <button onClick={handleSubmit}>POST A COLL STORY BRO</button>;
              </li>
            </ul>
          </Form>
        </div>
      ) : null}
    </div>
  );
}
