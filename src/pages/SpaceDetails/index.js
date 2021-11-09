import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaceById } from "../../store/space/actions";
import { selectAllSpaces } from "../../store/space/selectors";
import { useParams } from "react-router";

export default function SpaceDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  //   const spaces = useSelector(selectAllSpaces);
  //   console.log("this is my spaces", spaces);

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch]);

  return (
    <Jumbotron>
      <h1>Space details page</h1>

      {/* <div>
        {!spaces ? (
          <p>Loading...</p>
        ) : (
          <div>
            {spaces.map((space) => {
              return (
                <div key={space.id}>
                  <h4>{space.title}</h4>
                  <p>{space.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div> */}
    </Jumbotron>
  );
}
