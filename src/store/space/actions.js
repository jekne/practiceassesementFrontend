// import axios from "axios";

// const API_URL = "http://localhost:4000/spaces";

// export const spaceFetched = (data) => ({
//   type: "SPACE/fetched",
//   payload: data,
// });

// export const fetchSpaces = async (dispatch, getState) => {
//   const response = await axios.get(API_URL);
//   console.log("this is my response", response.data.spaces);
//   const space = response.data.rows;
//   dispatch(spaceFetched(space));
// };
import axios from "axios";
import { apiUrl } from "../../config/constants";

export function fetchAllSpaces() {
  return async function thunk(dispatch, getState) {
    const response = await await axios.get(`${apiUrl}/spaces`);

    const spaces = response.data;
    //   console.log("allSpaces", spaces)

    dispatch(
      spacesFullyFetched({
        spaces,
      })
    );
  };
}

export function spacesFullyFetched(data) {
  return {
    type: "spaces/allSpacesFetched",
    payload: data,
  };
}
