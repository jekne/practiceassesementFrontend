// export default function Homepage() {
//   return <div> this is my home page</div>;
// }
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { fetchAllSpaces } from "../store/space/actions";
import { selectAllSpaces } from "../store/space/selectors";

export default function Home() {
  const dispatch = useDispatch();

  const spaces = useSelector(selectAllSpaces);

  useEffect(() => {
    dispatch(fetchAllSpaces());
  }, [dispatch]);

  return (
    <Jumbotron>
      <h1>Home</h1>

      <div>
        {!spaces ? (
          <p>Loading...</p>
        ) : (
          <div>
            {spaces.map((space) => {
              return (
                <div key={space.id}>
                  <h4>{space.title}</h4>
                  <p>{space.description}</p>
                  <button>GO TO MY SPACE</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Jumbotron>
  );
}