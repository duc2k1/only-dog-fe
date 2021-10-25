import React, { memo } from "react";
import Header from "./Header";
import PostsProfile from "./PostsProfile";
//--------------------------------------------------
export default memo(function Profile() {
  //--------------------------------------------------
  return (
    <div className="container">
      <Header />
      <PostsProfile />
    </div>
  );
});
