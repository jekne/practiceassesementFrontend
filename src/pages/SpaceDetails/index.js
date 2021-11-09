import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaceById } from "../../store/space/actions";
import { selectSpaceDetails } from "../../store/space/selectors";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function SpaceDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const space = useSelector(selectSpaceDetails);
  console.log("this is my spaces", space);

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch]);

  return (
    <Jumbotron>
      <h1>Space details page</h1>

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
