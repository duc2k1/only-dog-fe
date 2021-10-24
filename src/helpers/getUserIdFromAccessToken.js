import jwt_decode from "jwt-decode";
//---------------------------------
export default getUserIdFromAccessToken = (accessToken) => {
  return jwt_decode(accessToken).userId;
};
