// import React from "react";

// import { fetchSpaces } from "../../store/space/actions";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectSpaces } from "../../store/space/selectors";

// //1. install & import axios -> actions.js
// //2. write and async function -> actions.js
// //3. inside the function, make a request with axios -> actions.js
// //4. console.log the result -> actions
// //5. put the data in local state -> redux state -> reducer
// //6. call it inside useEffect -> component
// //7. map & display on the screen -> selector.js + component

// export default function Homepage() {
//   const dispatch = useDispatch();

//   const spaces = useSelector(selectSpaces);
//   console.log("this is my spaces", spaces);

//   useEffect(() => {
//     dispatch(fetchSpaces);
//   }, []);

//   return (
//     <div>
//       <h1>this should open all the spaces</h1>
//       {!spaces
//         ? "loading"
//         : spaces.map((space) => (
//             <div key={space.id}>
//               <h4> {space.title}</h4>
//             </div>
//           ))}
//       <button onClick={() => dispatch(fetchSpaces)}>More posts</button>
//     </div>
//   );
// }
