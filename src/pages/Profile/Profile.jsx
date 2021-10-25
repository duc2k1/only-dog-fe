import React, { memo, useContext } from "react";
import Header from "./Header";
import PostsProfile from "./PostsProfile";
import getUserIdFromAccessToken from "../../helpers/getUserIdFromAccessToken";
import getQueryFromURL from "../../helpers/getQueryFromURL";
import { AuthContext } from "../../contexts/AuthProvider";
//--------------------------------------------------
export default memo(function Profile() {
  const { stateAccessToken } = useContext(AuthContext);
  //--------------------------------------------------
  return (
    <div className="container">
      <Header
        userId={
          getQueryFromURL("user_id") ||
          getUserIdFromAccessToken(stateAccessToken)
        }
      />
      <PostsProfile />
    </div>
  );
});
