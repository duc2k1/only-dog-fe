import React, { memo } from "react";
import Header from "./Header";
import PostsProfile from "./PostsProfile";
import getQueryFromURL from "../../helpers/getQueryFromURL";
//--------------------------------------------------
export default memo(function Profile() {
  //--------------------------------------------------
  return (
    <div className="container">
      <Header userId={getQueryFromURL("user_id")} />
      <PostsProfile />
    </div>
  );
});
