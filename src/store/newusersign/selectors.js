export const selectUserProfile = (reduxState) => {
  return {
    name: reduxState.user.name,
    email: reduxState.user.email,
    title: reduxState.space.title,
    description: reduxState.spacedescription,
    backgroundColor: reduxState.space.backgroundColor,
    color: reduxState.space.color,
  };
};
