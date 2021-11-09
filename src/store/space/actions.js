import axios from "axios";
import { apiUrl } from "../../config/constants";

export function fetchAllSpaces() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/spaces`);

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
    type: "SPACES/allSpacesFetched",
    payload: data,
  };
}
export function fetchSpaceById(id) {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/spaces/${id}`);
    // console.log("Am I getting here?", response);

    const spaces = response.data;

    dispatch(spacesFullyFetchedById(spaces));
  };
}
export function spacesFullyFetchedById(data) {
  return {
    type: "SPACES/spacesfullyfetchedbyid",
    payload: data,
  };
}
