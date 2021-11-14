// export const selectSpaces = (reduxState) => reduxState.space;

export const selectAllSpaces = (reduxState) => reduxState.space.spaces;
export const selectSpaceDetails = (reduxState) => {
  return reduxState.space.spaceDetails;
};

export const selectUserSpace = (reduxState) => reduxState.user.space;
// export const selectAllSpaces = (reduxState) => reduxState.space.spaces;
// export const selectSpaceDetails = (reduxState) => {
//   return reduxState.space.spaceDetails;
// };

// export const selectUserSpace = (reduxState) => {
//   if (!reduxState.user.space.stories) {
//     return null;
//   } else {
//     const stories = reduxState.user.space.stories;
//     return stories.sort((a, b) => {
//       return a.createdAt > b.createdAt ? 1 : -1;
//     });
//   }
// };
