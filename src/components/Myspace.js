import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaceById } from "../store/space/actions";
import { selectUserSpace } from "../store/space/selectors";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function SpaceDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const space = useSelector(selectUserSpace);
  console.log("this is my spaces", space);

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch]);

  return (
    <Jumbotron>
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
            {/* <h5>{space.description}</h5> */}
            {space.stories.map((story) => {
              return (
                <div key={story.id}>
                  <p>{story.name}</p>
                  <img style={{ maxWidth: "50vw" }} src={story.imageUrl} />
                  <button onclick={document.getElementById(story.id)}>
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
    </Jumbotron>
  );
}
