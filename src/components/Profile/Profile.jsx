import React, { memo } from "react";
import Header from "./Header";
import Posts from "./Posts";
//--------------------------------------------------
export default memo(function Profile() {
  //--------------------------------------------------
  return (
    <div className="container">
      <Header />
      <Posts />
    </div>
  );
});
