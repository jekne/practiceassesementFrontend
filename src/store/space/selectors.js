// export const selectSpaces = (reduxState) => reduxState.space;

export const selectAllSpaces = (reduxState) => reduxState.space.spaces;
export const selectSpaceDetails = (reduxState) => {
  return reduxState.space.spaceDetails;
};
