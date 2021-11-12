import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserSpace } from "../store/space/selectors";
import { createNewStory } from "../store/user/actions";
import { Form } from "react-bootstrap";
import { useState } from "react";

export default function SpaceDetails() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [formHidden, setFormHidden] = useState(false);

  const createStory = useSelector(selectUserSpace);
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = createStory.length + 1;
    dispatch(createNewStory({ name, content, imageUrl, id }));
  };
  return (
    <div>
      <button onClick={() => setFormHidden(!formHidden)}>hide form</button>
      {!formHidden ? (
        <div>
          <Form>
            <ul>
              <li>
                {" "}
                <labeL>NAME:</labeL>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </li>
              <li>
                {" "}
                <labeL>CONTENT:</labeL>
                <input
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                />
              </li>
              <li>
                {" "}
                <labeL>IMAGEURL:</labeL>
                <input
                  value={imageUrl}
                  onChange={(event) => setImageUrl(event.target.value)}
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
