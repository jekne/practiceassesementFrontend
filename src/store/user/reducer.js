import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  space: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };
    case "USER/delete-story":
      // console.log("payload", action.payload);
      const idToDelete = action.payload;

      const newStories = state.space.stories.filter(
        (story) => story.id !== idToDelete
      );
      // console.log("new stories", newStories);

      return {
        ...state,
        space: {
          ...state.space,
          stories: newStories, //stories: [...space.stories, {new story}]
        },
      };
    default:
      return state;
  }
};
