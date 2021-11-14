// import React, { useEffect } from "react";
// import { Jumbotron } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSpaceById } from "../store/space/actions";
// import { selectUserSpace } from "../store/space/selectors";
// import { useParams } from "react-router";
// import { NavLink } from "react-router-dom";
// import { deleteStory } from "../store/user/actions";
// import { createNewStory } from "../store/user/actions";
// import { Form } from "react-bootstrap";
// import { useState } from "react";

// export default function FormEditMySpace() {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [backgroundColor, setBackGroundColor] = useState("");
//   const [color, setColor] = useState("");
//   const [formHidden, setFormHidden] = useState(false);

//   // //   const createStory = useSelector(selectUserSpace);
//   //   const handleSubmit = (event) => {
//   //     event.preventDefault();
//   //     const id = createStory.length + 1;
//   //     dispatch(createNewStory({ title, description, backgroundColor, id }));
//   //   };
//   //   title, description backgroundColor and color
//   return (
//     <div>
//       <NavLink>
//         <button onClick={() => setFormHidden(!formHidden)}>hide form</button>
//         {!formHidden ? (
//           <div>
//             <Form>
//               <ul>
//                 <li>
//                   {" "}
//                   <labeL>TITLE:</labeL>
//                   <Form.Control
//                     value={title}
//                     onChange={(event) => setTitle(event.target.value)}
//                   />
//                 </li>
//                 <li>
//                   {" "}
//                   <labeL>DESCRIPTION:</labeL>
//                   <input
//                     value={description}
//                     onChange={(event) => setDescription(event.target.value)}
//                   />
//                 </li>
//                 <li>
//                   {" "}
//                   <labeL>BACK GROUND COLOR:</labeL>
//                   <input
//                     value={backgroundColor}
//                     onChange={(event) => setBackGroundColor(event.target.value)}
//                   />
//                 </li>
//                 <li>
//                   {" "}
//                   <labeL>COLOR:</labeL>
//                   <input
//                     value={color}
//                     onChange={(event) => setColor(event.target.value)}
//                   />
//                 </li>
//                 <li>
//                   {" "}
//                   {/* <button onClick={handleSubmit}>POST A COLL STORY BRO</button>; */}
//                 </li>
//               </ul>
//             </Form>
//           </div>
//         ) : null}
//       </NavLink>
//     </div>
//   );
// }

import React from "react";
import { FormLabel, NavLink } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { selectMySpace } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { selectUser } from "../../store/user/selectors";
import { updateSpace } from "../../store/user/actions";
import { FormControl } from "react-bootstrap";

export default function FormEditMySpace() {
  const [formHidden, setFormHidden] = useState(false);

  const mySpace = useSelector(selectMySpace);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundColor, setBackGroundColor] = useState("");
  const [color, setColor] = useState("");

  const token = useSelector(selectToken);

  const dispatch = useDispatch();
  const history = useHistory();

  const spaceId = 4;
  //check the space id

  useEffect(() => {
    dispatch(selectUser);
  }, [dispatch]);

  const submitForm = (event) => {
    event.preventDefault();

    // console.log("index.js: Update space:", spaceId, title, description, backgroundColor, color, token);

    dispatch(
      updateSpace(spaceId, title, description, backgroundColor, color, token)
    );
    history.push("./");

    // setName("")
    // setContent("")
    // setImageUrl("")
  };

  return (
    <NavLink>
      <div> PLEASEEEEEEEEEEE SHOW UPPPPPPPPPPPP</div>
      <button onClick={() => setFormHidden(!formHidden)}>hide form</button>
      {!formHidden ? (
        <div>
          <Form>
            <ul>
              <li>
                {" "}
                <FormLabel>TITLE:</FormLabel>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </li>
              <li>
                {" "}
                <FormLabel>DESCRIPTION:</FormLabel>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </li>
              <li>
                {" "}
                <FormLabel>BACK GROUND COLOR:</FormLabel>
                <Form.Control
                  type="color"
                  value={backgroundColor}
                  onChange={(event) => setBackGroundColor(event.target.value)}
                />
              </li>
              <li>
                {" "}
                <FormLabel>COLOR:</FormLabel>
                <Form.Control
                  type="color"
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                />
              </li>
              <li>
                {" "}
                <button onClick={submitForm}>SUBMIT THE FORM</button>;
              </li>
            </ul>
          </Form>
        </div>
      ) : null}
    </NavLink>
  );
}
