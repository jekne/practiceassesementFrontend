// const initialState = {
//   loading: true,
//   spaces: [],
// };

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "SPACE/fetched": {
//       console.log("this is my action", action);
//       return {
//         ...state,
//         spaces: [...state.spaces, ...action.payload],
//         loading: false,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }
const initialState = {
  spaces: [],
};

// export default function spaces(state = initialState, action) {
//   switch (action.type) {
//     case "SPACES/allSpacesFetched": {
//       return {
//         spaces: action.payload.spaces,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }
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
      const result = {
        ...state,
        spaces: [action.payload.spaces],
      };
      return result;
    }
    default: {
      return state;
    }
  }
}
