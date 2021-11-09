const initialState = {
  loading: false,
  spaces: [],
};

export default function spaces(state = initialState, action) {
  switch (action.type) {
    case "SPACES/allSpacesFetched": {
      const result = {
        ...state,
        spaces: action.payload.spaces,
      };
      return result;
    }
    case "SPACES/spacesfullyfetchedbyid": {
      console.log("this is the current state", state);
      const newState = {
        ...state,
        loading: false,
        spaceDetails: action.payload,
        // spaceDetails it is a new key
      };
      console.log("this is my newState", newState);
      return newState;
    }
    default: {
      return state;
    }
  }
}
