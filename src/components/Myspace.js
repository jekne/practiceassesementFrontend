import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaceById } from "../store/space/actions";
import { selectUserSpace } from "../store/space/selectors";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { deleteStory } from "../store/user/actions";
import { createNewStory } from "../store/user/actions";
import { Form } from "react-bootstrap";
import { useState } from "react";
//
import { getUserWithStoredToken } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
//
import FormEditMySpace from "./Form/FormEditMySpace";
export default function SpaceDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [formHidden, setFormHidden] = useState(false);
  // const { name, content, imageUrl } = getState();
  const token = useSelector(selectToken);
  //
  const space = useSelector(selectUserSpace);
  console.log("this is my spaces", space);

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch]);

  //
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  //

  const createStory = useSelector(selectUserSpace);
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = createStory.length + 1;
    dispatch(createNewStory({ name, content, imageUrl, id, token }));
  };

  return (
    <Jumbotron>
      <div>
        <FormEditMySpace></FormEditMySpace>{" "}
      </div>
      <div>
        <strong>this is my space, belongs to a one person loggin</strong>
      </div>
      <div>
        {!space ? (
          <p>Loading...</p>
        ) : (
          <div
            style={{
              backgroundColor: `${space.backgroundColor}`,
              color: `${space.color}`,
            }}
          >
            <h4>{space.title}</h4>

            <h5>{space.description}</h5>

            {space.stories.map((story) => {
              return (
                <div key={story.id}>
                  <p>{story.name}</p>
                  <img style={{ maxWidth: "50vw" }} src={story.imageUrl} />
                  <button
                    onClick={() => {
                      dispatch(deleteStory(story.id));
                    }}
                  >
                    DELETE STORYS
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <NavLink to={`/`}>
        <button>GO BACK TO ALL SPACES</button>
      </NavLink>
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
    </Jumbotron>
  );
}

//   dispatch(createNewStory()); remember to pass the same thing from the action
// the button place kind of true or false when you touch open a new thin kinf of a if
// {
//   name, content, imageUrl;
// }
