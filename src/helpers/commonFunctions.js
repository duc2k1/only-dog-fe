export const formatDate = (date) => {
  return date.split("T")[0];
};
//-------------------------------------------------------------
export const sortDescendingBasedOnFollowers = (arrayData) => {
  return arrayData.sort((a, b) => b.followers.length - a.followers.length);
};
