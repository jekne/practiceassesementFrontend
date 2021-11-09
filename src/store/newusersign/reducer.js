const initialState = {
  loading: false,
  title: "",
  description: null,
  backgroundColor: "",
  color: "",
};
export default function newUserSignUp(state = initialState, action) {
  switch (action.type) {
    case "NEWUSERSIGN/newusersignup": {
      const result = {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
        backgroundColor: action.payload.backgroundColor,
        color: action.payload.color,
      };
      console.log("this is the current state", state);
      return result;
      // }
      // case "SPACES/spacesfullyfetchedbyid": {
      //   console.log("this is the current state", state);
      //   const newState = {
      //     ...state,
      //     loading: false,
      //     spaceDetails: action.payload,
      //     // spaceDetails it is a new key
      //   };
      //   console.log("this is my newState", newState);
      //   return newState;
    }
    default: {
      return state;
    }
  }
}

// title: <MyName>'s space
// description: null
// backgroundColor: #ffffff (white)
// color: #000000 (black)
