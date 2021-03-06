import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { fetchAllSpaces } from "../store/space/actions";
import { selectAllSpaces } from "../store/space/selectors";
import { NavLink } from "react-router-dom";

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
                  <h4
                    style={{
                      backgroundColor: `${space.backgroundColor}`,
                      color: `${space.color}`,
                    }}
                  >
                    {space.title}
                  </h4>
                  {/* <p>{space.description}</p> */}
                  <NavLink to={`/space/${space.id}`}>
                    <button>VISIT SPACE</button>
                  </NavLink>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Jumbotron>
  );
}
